from import_export import resources, fields
from django.utils.translation import gettext_lazy as _
from import_export.widgets import ForeignKeyWidget, ManyToManyWidget

from SiriusCRM.models import User, Lead, Messenger, LeadStatus, LeadSource, CrmComment, LeadMessenger, LeadCourse


class UserResource(resources.ModelResource):
    id = fields.Field(attribute='id')
    last_name = fields.Field(attribute='last_name', column_name=_('Last name'))
    first_name = fields.Field(attribute='first_name', column_name=_('First name'))
    middle_name = fields.Field(attribute='middle_name', column_name=_('Middle name'))
    email = fields.Field(attribute='email', column_name=_('Email'))
    mobile = fields.Field(attribute='mobile', column_name=_('Mobile'))
    birthday = fields.Field(attribute='birthday', column_name=_('Birthday'))

    class Meta:
        model = User
        fields = ('id', 'first_name', 'middle_name', 'email', 'mobile', 'birthday')
        export_order = ('id', 'last_name', 'first_name', 'middle_name', 'email', 'mobile', 'birthday')


class LeadResource(resources.ModelResource):
    id = fields.Field(attribute='id')
    first_name = fields.Field(attribute='first_name', column_name=_('First name'))
    last_name = fields.Field(attribute='last_name', column_name=_('Last name'))
    middle_name = fields.Field(attribute='middle_name', column_name=_('Middle name'))
    email = fields.Field(attribute='email', column_name=_('Email'))
    mobile = fields.Field(attribute='mobile', column_name=_('Mobile'))
    date_added = fields.Field(attribute='date_added', column_name=_('Date added'))
    messengers = fields.Field(attribute='messengers', column_name=_('Messengers'), widget=ManyToManyWidget(LeadMessenger, separator=';', field='name'))
    status = fields.Field(attribute='status', column_name=_('Status'), widget=ForeignKeyWidget(LeadStatus, 'name'))
    source = fields.Field(attribute='source', column_name=_('Source'), widget=ForeignKeyWidget(LeadSource, 'name'))
    course = fields.Field(attribute='course', column_name=_('Course'), widget=ForeignKeyWidget(LeadCourse, 'name'))
    consultant_name = fields.Field(attribute='consultant', column_name=_('Consultant name'), widget=ForeignKeyWidget(User, 'first_name'))
    consultant_surname = fields.Field(attribute='consultant', column_name=_('Consultant surname'), widget=ForeignKeyWidget(User, 'last_name'))
    action = fields.Field(attribute='action', column_name=_('Action'))
    action_date = fields.Field(attribute='action_date', column_name=_('Action date'))
    action_time = fields.Field(attribute='action_time', column_name=_('Action time'))
    comments = fields.Field(attribute='comments', column_name=_('Comments'), widget=ManyToManyWidget(CrmComment, separator=';', field='comment'))

    class Meta:
        model = Lead
        fields = ('id', 'first_name', 'middle_name', 'last_name', 'email', 'mobile', 'time')
        export_order = ('id', 'date_added', 'last_name', 'first_name', 'middle_name', 'email', 'mobile', 'messengers', 'status',
                        'source', 'course', 'consultant_name', 'consultant_surname', 'action', 'action_date', 'action_time', 'comments')
