'use strict';

/**
 * angular
 * Description: Angular!
 */
var app = angular.module('app', []);


var panels = [
{
	index: 0,
	name: "Menu",
	title: "Меню",
	href: ""
},
	{
		index: 1,
		name: "Class",
		title: "Список класса",
		href: ""
	},
	{
		index: 2,
		name: "Journal",
		title: "Жернал",
		href: ""
	},
	{
		index: 3,
		name: "Works",
		title: "Работы",
		href: ""
	},
	{
		index: 4,
		name: "PupilCard",
		title: "Информация об учинике",
		href: ""
	}
];

function Class(obj) {
	this.id = obj.Id;
	this.teacherId = obj.TeacherId;
	this.pupilsList = obj.pupilsList;
}

function Pupil(obj) {
	this.id = obj.Id;
	this.name = obj.Name;
	this.classId = obj.ClassId;
	this.bDate = obj.Birthday;
	this.age = obj.age;
	this.gender = obj.Gender;
	this.family = obj.Family;
}

var someClass = {
	id: 1,
	teatherId: 1,
	pupilsList: [
		{
			id: 1,
			name: "Иванов Иван Иванович",
			classId: 1,
			bDate: "12/07/2010",
			age: 6,
			gender: "male",
			family: "full"
		},
		{
			id: 2,
			name: "Смирнова Гадя Петрович",
			classId: 1,
			bDate: "12/07/2013",
			age: 33,
			gender: "female",
			family: "only mather"
		}
	]
}



var main = function ($scope, classService) {
	var self = $scope;
	self.panels = panels;
	self.currentPanel = panels[0];
	self.setCurrentPanel = function (panel) {
		self.currentPanel = panel;
	};
	self.title = "title";
	self.myClass = classService.getClass;
	self.myPupils = classService.getPupils;
	self.pupilInfo = function() {
		
	}
};


function classService () {
	this.getClass = someClass;
	this.getPupils = someClass.pupilsList;
};

app.service('classService', classService);

var appController = app.controller('AppController', ['$scope', 'classService', main]);





