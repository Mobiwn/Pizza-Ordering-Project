# Generated by Django 5.0.3 on 2024-03-10 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('making_pizza', '0004_rename_data_added_pizza_date_added'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pizza',
            name='notes',
            field=models.TextField(blank=True),
        ),
    ]
