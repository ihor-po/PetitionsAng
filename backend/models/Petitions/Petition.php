<?php

namespace app\models\petitions;

use yii\db\ActiveRecord;

class Petition extends ActiveRecord
{
    /**
     * @return string the name of the table associated with this ActiveRecord class.
     */
    public static function tableName()
    {
        return '{{petitions_s}}';
    }
}