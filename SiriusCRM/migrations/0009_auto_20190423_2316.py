# Generated by Django 2.1.7 on 2019-04-23 20:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('SiriusCRM', '0008_auto_20190422_2150'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContactMessenger',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
            ],
            options={
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='LeadMessenger',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('lead', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='lead_messenger_value', to='SiriusCRM.Lead')),
                ('messenger', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='lead_messenger_value', to='SiriusCRM.Messenger')),
            ],
            options={
                'ordering': ['id'],
            },
        ),
        migrations.AlterField(
            model_name='contact',
            name='email',
            field=models.EmailField(blank=True, max_length=254, verbose_name='Email'),
        ),
        migrations.AlterField(
            model_name='contact',
            name='mobile',
            field=models.CharField(max_length=20, unique=True, verbose_name='Mobile'),
        ),
        migrations.AddField(
            model_name='contactmessenger',
            name='contact',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='contact_messenger_value', to='SiriusCRM.Contact'),
        ),
        migrations.AddField(
            model_name='contactmessenger',
            name='messenger',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='contact_messenger_value', to='SiriusCRM.Messenger'),
        ),
        migrations.AddField(
            model_name='contact',
            name='messengers',
            field=models.ManyToManyField(through='SiriusCRM.ContactMessenger', to='SiriusCRM.Messenger'),
        ),
        migrations.AddField(
            model_name='lead',
            name='messengers',
            field=models.ManyToManyField(through='SiriusCRM.LeadMessenger', to='SiriusCRM.Messenger'),
        ),
    ]
