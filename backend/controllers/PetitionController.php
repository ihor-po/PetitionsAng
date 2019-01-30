<?php
/**
 * Created by PhpStorm.
 * User: sobikashi
 * Date: 1/30/19
 * Time: 4:43 PM
 */

namespace app\controllers;


use app\models\petitions\Petition;
use yii\data\Pagination;
use yii\web\Controller;

class PetitionController extends Controller
{
    public function actionIndex()
    {
        $query = new Petition();
        $query = $query::find();

        $pagination = new Pagination([
            'defaultPageSize' => 5,
            'totalCount' => $query->count(),
        ]);

        $petitions = $query->orderBy('created_date')
            ->offset($pagination->offset)
            ->limit($pagination->limit)
            ->all();
        return $this->render('index', compact('petitions', 'pagination'));
    }
}