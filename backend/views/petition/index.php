<?php
use yii\helpers\Html;
use yii\widgets\LinkPager;
?>
    <h1>Петиции</h1>
    <ul>
        <?php foreach ($petitions as $petition): ?>
            <li>
                <?= Html::encode("{$petition->title} ({$petition->created_date})") ?>:
                <?= $petition->petition_text ?>
            </li>
        <?php endforeach; ?>
    </ul>

<?= LinkPager::widget(['pagination' => $pagination]) ?>