document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('nav .menu-icon');
    const menu = document.querySelector('.menu');
    const generalPurposeSection = document.getElementById('generalPurpose');
    const darkModeButton = document.getElementById('dark');
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    
    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('open');
        if (menu.classList.contains('open')) {
            menuIcon.textContent = 'menu';
            document.querySelector('section').style.margin = '0 auto';
            document.getElementById("ai-support-section").style.margin = '0 auto';
            document.getElementById('expertChat').style.margin = "0 auto";
        } else {
            menuIcon.textContent = 'close';
            document.querySelector('section').style.marginLeft = '250px';
            document.getElementById("ai-support-section").style.marginLeft = '220px';
            document.getElementById('expertChat').style.marginLeft = "250px";
        }
    });

    document.querySelector('.menu-sec').addEventListener('click', function () {
        generalPurposeSection.classList.toggle('open');
    });

    darkModeButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });

    const expenseForm = document.querySelector('#expenseTracker form');
    const expenseList = document.getElementById('expenseList');

    function renderExpenses() {
        expenseList.innerHTML = '';
        expenses.forEach((expense, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${expense.date} - ${expense.category}: ₹${expense.amount.toFixed(2)}
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;
            expenseList.appendChild(li);
        });
    }

    expenseForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const date = document.getElementById('date').value;
        const category = document.getElementById('category').value;
        const amount = parseFloat(document.getElementById('amount').value);
        
        if (date && category && !isNaN(amount)) {
            expenses.push({ date, category, amount });
            localStorage.setItem('expenses', JSON.stringify(expenses));
            renderExpenses();
            updateChart();
            alert('Expense added!');
            expenseForm.reset();
        } else {
            alert('Please fill out all fields correctly.');
        }
    });

    expenseList.addEventListener('click', function (e) {
        if (e.target.classList.contains('edit-btn')) {
            const index = e.target.dataset.index;
            const expense = expenses[index];
            document.getElementById('date').value = expense.date;
            document.getElementById('category').value = expense.category;
            document.getElementById('amount').value = expense.amount;

            expenses.splice(index, 1);
            localStorage.setItem('expenses', JSON.stringify(expenses));
            renderExpenses();
            updateChart();
        }

        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.dataset.index;
            expenses.splice(index, 1);
            localStorage.setItem('expenses', JSON.stringify(expenses));
            renderExpenses();
            updateChart();
        }
    });

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [],
            datasets: [{
                label: 'Expenses',
                data: [],
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        }
    });

    function updateChart() {
        const categories = {};
        expenses.forEach(exp => {
            categories[exp.category] = (categories[exp.category] || 0) + exp.amount;
        });

        myChart.data.labels = Object.keys(categories);
        myChart.data.datasets[0].data = Object.values(categories);
        myChart.update();
    }

    renderExpenses();
    updateChart();

    const taxForm = document.querySelector('#taxCalculator form');
    taxForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const income = parseFloat(document.getElementById('income').value);
        const taxRate = parseFloat(document.getElementById('taxRate').value);

        if (!isNaN(income) && !isNaN(taxRate)) {
            const taxAmount = income * (taxRate / 100);
            const netIncome = income - taxAmount;

            document.querySelector('#taxAmount p').textContent = `Tax Amount: ₹${taxAmount.toFixed(2)}`;
            document.querySelector('#netIncome p').textContent = `Net Income: ₹${netIncome.toFixed(2)}`;
            document.querySelector('#taxToPay span').textContent = `₹${taxAmount.toFixed(2)}`;
            document.querySelector('#leftAmount span').textContent = `₹${netIncome.toFixed(2)}`;
        } else {
            alert('Please fill out all fields correctly.');
        }
    });

    const aiSupportItem = document.getElementById("ai-support");
    const aiSupportContent = document.querySelector(".ai-support");
    const expenseTrackerSection = document.getElementById('expense-tracker-section');
    const aiSupportSection = document.getElementById('ai-support-section');
    const startupSection = document.getElementById('startup-expense');

    aiSupportItem.addEventListener("click", () => {
        aiSupportSection.style.display = 'block';
        startupSection.style.display = 'none';
        expenseTrackerSection.style.display = "none";
        document.getElementById('expertChat').style.display = "none";
        const stickyNotesSection = document.getElementById('sticky-notes');
        stickyNotesSection.style.display = 'none';
    });

    document.getElementById('ai-support-button').addEventListener('click', function() {
        expenseTrackerSection.style.display = 'none';
        aiSupportSection.style.display = 'block';
        startupSection.style.display = 'none';
        document.getElementById('expertChat').style.display = "none";
        const stickyNotesSection = document.getElementById('sticky-notes');
        stickyNotesSection.style.display = 'none';
    });

    document.getElementById('expense-tracker-button').addEventListener('click', function() {
        expenseTrackerSection.style.display = 'block';
        aiSupportSection.style.display = 'none';
        startupSection.style.display = 'none';
        document.getElementById('expertChat').style.display = "none";
        const stickyNotesSection = document.getElementById('sticky-notes');
        stickyNotesSection.style.display = 'none';
    });

    document.getElementById('startUp-expence-btn').addEventListener('click', function() {
        startupSection.style.display = 'block';
        expenseTrackerSection.style.display = 'none';
        aiSupportSection.style.display = 'none';
        document.getElementById('expertChat').style.display = "none";
        const stickyNotesSection = document.getElementById('sticky-notes');
        stickyNotesSection.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const startupExpenses = JSON.parse(localStorage.getItem('startupExpenses')) || [];
    const startupForm = document.querySelector('#startup-expenseTracker form');
    const startupList = document.getElementById('expense-list');
    const startupCtx = document.getElementById('startupChart').getContext('2d');

    function renderStartupExpenses() {
        startupList.innerHTML = '';
        startupExpenses.forEach((expense, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${expense.date} - ${expense.description}: ₹${expense.amount.toFixed(2)} - Type: ${expense.type}
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;
            startupList.appendChild(li);
        });
    }

    startupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const date = document.getElementById('expense-date').value;
        const description = document.getElementById('expense-description').value;
        const type = document.getElementById('expense-type').value;
        const amount = parseFloat(document.getElementById('expense-amount').value);

        if (date && description && type && !isNaN(amount)) {
            startupExpenses.push({ date, description, type, amount });
            localStorage.setItem('startupExpenses', JSON.stringify(startupExpenses));
            renderStartupExpenses();
            updateStartupChart();
            alert('Expense added!');
            startupForm.reset();
        } else {
            alert('Please fill out all fields correctly.');
        }
    });

    startupList.addEventListener('click', function (e) {
        if (e.target.classList.contains('edit-btn')) {
            const index = e.target.dataset.index;
            const expense = startupExpenses[index];
            document.getElementById('expense-date').value = expense.date;
            document.getElementById('expense-description').value = expense.description;
            document.getElementById('expense-type').value = expense.type;
            document.getElementById('expense-amount').value = expense.amount;

            startupExpenses.splice(index, 1);
            localStorage.setItem('startupExpenses', JSON.stringify(startupExpenses));
            renderStartupExpenses();
            updateStartupChart();
        }

        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.dataset.index;
            startupExpenses.splice(index, 1);
            localStorage.setItem('startupExpenses', JSON.stringify(startupExpenses));
            renderStartupExpenses();
            updateStartupChart();
        }
    });

    const startupChart = new Chart(startupCtx, {
        type: 'pie',
        data: {
            labels: [],
            datasets: [{
                label: 'Startup Expenses',
                data: [],
                backgroundColor: [
                    '#FF8184', '#36A2EE', '#FFDE56', '#5BC0C0', '#9966FF'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        }
    });

    function updateStartupChart() {
        const categories = {};
        startupExpenses.forEach(exp => {
            categories[exp.type] = (categories[exp.type] || 0) + exp.amount;
        });
        startupChart.data.labels = Object.keys(categories);
        startupChart.data.datasets[0].data = Object.values(categories);
        startupChart.update();
    }

    renderStartupExpenses();
    updateStartupChart();
});


document.getElementById('chatExpertBtn').addEventListener('click', function() {
    const chatExpertSection = document.getElementById('expertChat');
    const aiSupportSection = document.getElementById('ai-support-section');
    const expenseTrackerSection = document.getElementById('expense-tracker-section');
    const startupSection = document.getElementById('startup-expense');
    expenseTrackerSection.style.display = 'none';
    aiSupportSection.style.display = 'none';
    startupSection.style.display = 'none';
    chatExpertSection.style.display = 'block';
    const stickyNotesSection = document.getElementById('sticky-notes');
    stickyNotesSection.style.display = 'none';
});

// Sticky notes

const stickBtn = document.getElementById('sticky-notes-btn');

stickBtn.addEventListener('click', function() {
    const stickyNotesSection = document.getElementById('sticky-notes');
    stickyNotesSection.style.display = 'block';
    const chatExpertSection = document.getElementById('expertChat');
    const aiSupportSection = document.getElementById('ai-support-section');
    const expenseTrackerSection = document.getElementById('expense-tracker-section');
    const startupSection = document.getElementById('startup-expense');
    expenseTrackerSection.style.display = 'none';
    aiSupportSection.style.display = 'none';
    startupSection.style.display = 'none';
    chatExpertSection.style.display = 'none';

});