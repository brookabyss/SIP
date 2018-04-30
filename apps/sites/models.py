from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Address(models.Model):
    line_1=models.CharField(max_length=255)
    line_2=models.CharField(max_length=255)
    line_3=models.CharField(max_length=255)
    city=models.CharField(max_length=80)
    country=models.CharField(max_length=60)
    zipcode=models.CharField(max_length=15)
    other_details=models.CharField(max_length=255)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.line_1+" , "+self.city


class Site(models.Model):
    site_name=models.CharField(max_length=255)
    site_code=models.CharField(max_length=45)
    monitored_zone=models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    address_id=models.ForeignKey(Address,related_name="site_id")

    def __str__(self):
        return self.site_name




class POC(models.Model):
    poc_type=models.CharField(max_length=45)
    poc_name=models.CharField(max_length=255)
    site_id=models.ForeignKey(Site, related_name="poc_id")
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.poc_name


class Schedule(models.Model):
    site_id=models.ForeignKey(Site, related_name="schedule_id")
    poc_id=models.ForeignKey(POC, related_name="schedule_id")
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.poc_id

class WeeklySchedule(models.Model):
    weekday=models.CharField(max_length=8)
    available_from=models.TimeField(blank=False, null=False)
    available_to=models.TimeField(blank=False, null=False)
    schedule_id=models.ForeignKey(Schedule, related_name="weekly_schedule_id")
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.schedule_id


class MethodOfContact(models.Model):
    method_type=models.CharField(max_length=10)
    value=models.CharField(max_length=255)
    poc_id=models.ForeignKey(POC, related_name="method_of_contact_id")
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.method_type +" "+ self.value
