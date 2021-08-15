'use strict'
const start = document.getElementById('start');
// Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
const btnPlusIncom = document.querySelector('.income').getElementsByTagName('button')
const btnPlusExpenses = document.querySelector('.expenses').getElementsByTagName('button')
// Чекбокс по id через querySelector
const depositCheck = document.querySelector('#deposit-check')
// Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
const additionalIncomeItem = document.querySelectorAll('.additional_income-item')
// Каждый элемент в правой части программы через класс, 
//которые имеют в имени класса "-value", начиная с class="budget_day-value" 
//и заканчивая class="target_month-value">
const budgetMonthValue = document.querySelector('.budget_month-value');
const budgetDayValue = document.querySelector('.budget_day-value');
const expensesMonthValue = document.querySelector('.expenses_month-value');
const additionalIncomeValue = document.querySelector('.additional_income-value');
const additionalExpensesValue = document.querySelector('.additional_expenses-value');
const incomePeriodValue = document.querySelector('.income_period-value');
const targetMonthValue = document.querySelector('.target_month-value');
const periodSelect = document.querySelector('.period-select');
const targetAmount = document.querySelector('.target-amount');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const depositBankSelect = document.querySelector('.deposit-bank');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const expensesTitle = document.querySelector('.expenses-title');
const expensesAmount = document.querySelector('.expenses-amount');
const incomeTitle = document.querySelector('.income-title');
const incomeAmount = document.querySelector('.income-amount');


