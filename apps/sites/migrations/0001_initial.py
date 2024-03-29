# -*- coding: utf-8 -*-
# Generated by Django 1.11.12 on 2018-04-30 22:43
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('line_1', models.CharField(max_length=255)),
                ('line_2', models.CharField(max_length=255)),
                ('line_3', models.CharField(max_length=255)),
                ('city', models.CharField(max_length=80)),
                ('region_state', models.CharField(max_length=100)),
                ('country', models.CharField(max_length=60)),
                ('zipcode', models.CharField(max_length=15)),
                ('other_details', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name_plural': 'addresses',
            },
        ),
        migrations.CreateModel(
            name='MethodOfContact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('method_type', models.CharField(max_length=10)),
                ('value', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='POC',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('poc_type', models.CharField(max_length=45)),
                ('poc_name', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Schedule',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('poc_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='schedule_id', to='sites.POC')),
            ],
        ),
        migrations.CreateModel(
            name='Site',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('site_name', models.CharField(max_length=255)),
                ('site_code', models.CharField(max_length=45)),
                ('monitored_zone', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('address_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='site_id', to='sites.Address')),
            ],
        ),
        migrations.CreateModel(
            name='WeeklySchedule',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('weekday', models.CharField(max_length=8)),
                ('available_from', models.TimeField()),
                ('available_to', models.TimeField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('schedule_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='weekly_schedule_id', to='sites.Schedule')),
            ],
        ),
        migrations.AddField(
            model_name='schedule',
            name='site_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='schedule_id', to='sites.Site'),
        ),
        migrations.AddField(
            model_name='poc',
            name='site_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='poc_id', to='sites.Site'),
        ),
        migrations.AddField(
            model_name='methodofcontact',
            name='poc_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='method_of_contact_id', to='sites.POC'),
        ),
    ]
