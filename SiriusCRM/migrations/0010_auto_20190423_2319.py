# Generated by Django 2.1.7 on 2019-04-23 20:19

from django.db import migrations


class Migration(migrations.Migration):

    def migrate_messengers(apps, schema_editor):
        leads = apps.get_model('SiriusCRM', 'Lead')
        lead_messengers = apps.get_model('SiriusCRM', 'LeadMessenger')

        for lead in leads.objects.all():
            if lead.messenger:
                lead_messenger = lead_messengers(lead=lead, messenger=lead.messenger)
                lead_messenger.save()

    dependencies = [
        ('SiriusCRM', '0009_auto_20190423_2316'),
    ]

    operations = [
        migrations.RunPython(migrate_messengers),
    ]