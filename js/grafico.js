document.addEventListener("DOMContentLoaded", function(evento) {

    // referência: https://www.youtube.com/watch?v=XskoLvDa4yk
    // Usei para algumas funções como Date()

    imgTitle = document.querySelector('section.div img[src*="a06be207-30d6-4a7e-84c0-f57d721b1118-removebg-preview.png"]');
    if (imgTitle) {
        calendarContainer = document.createElement('div');
        calendarContainer.id = 'calendar';
        calendarContainer.style.backgroundColor = '#F2C6CF';
        calendarContainer.style.border = '0.125rem solid #D96C9F';
        calendarContainer.style.borderRadius = '0.5rem';
        calendarContainer.style.padding = '0.5rem';
        calendarContainer.style.fontFamily = '"Nunito", sans-serif';
        calendarContainer.style.color = '#000000';
        calendarContainer.style.display = 'flex';
        calendarContainer.style.flexDirection = 'column';
        calendarContainer.style.gap = '0.25rem';
        calendarContainer.style.width = '30rem';
        calendarContainer.style.boxSizing = 'border-box';
        calendarContainer.style.fontSize = '0.7rem';

        calendarHeader = document.createElement('div');
        calendarHeader.style.display = 'flex';
        calendarHeader.style.justifyContent = 'space-between';
        calendarHeader.style.alignItems = 'center';
        calendarHeader.style.marginBottom = '0.25rem';

        prevButton = document.createElement('button');
        prevButton.innerHTML = '◄';
        prevButton.style.padding = '0.2rem';
        prevButton.style.backgroundColor = '#D96C9F';
        prevButton.style.color = '#FFFFFF';
        prevButton.style.border = 'none';
        prevButton.style.borderRadius = '0.2rem';
        prevButton.style.cursor = 'pointer';
        prevButton.style.fontSize = '0.6rem';

        monthYear = document.createElement('h3');
        monthYear.style.fontSize = '0.8rem';
        monthYear.style.margin = '0';
        monthYear.style.fontWeight = '700';

        nextButton = document.createElement('button');
        nextButton.innerHTML = '►';
        nextButton.style.padding = '0.2rem';
        nextButton.style.backgroundColor = '#D96C9F';
        nextButton.style.color = '#FFFFFF';
        nextButton.style.border = 'none';
        nextButton.style.borderRadius = '0.2rem';
        nextButton.style.cursor = 'pointer';
        nextButton.style.fontSize = '0.6rem';

        calendarHeader.appendChild(prevButton);
        calendarHeader.appendChild(monthYear);
        calendarHeader.appendChild(nextButton);

        calendarGrid = document.createElement('div');
        calendarGrid.style.display = 'grid';
        calendarGrid.style.gridTemplateColumns = 'repeat(7, 1fr)';
        calendarGrid.style.gap = '0.1rem';
        calendarGrid.style.textAlign = 'center';

        daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        for (i = 0; i < daysOfWeek.length; i++) {
            dayLabel = document.createElement('div');
            dayLabel.innerHTML = daysOfWeek[i];
            dayLabel.style.fontWeight = '700';
            dayLabel.style.fontSize = '0.6rem';
            calendarGrid.appendChild(dayLabel);
        }

        calendarContainer.appendChild(calendarHeader);
        calendarContainer.appendChild(calendarGrid);
        imgTitle.parentNode.replaceChild(calendarContainer, imgTitle);

        today = new Date();
        currentMonth = localStorage.getItem('calendarMonth') ? parseInt(localStorage.getItem('calendarMonth')) : today.getMonth();
        currentYear = localStorage.getItem('calendarYear') ? parseInt(localStorage.getItem('calendarYear')) : today.getFullYear();

        function renderCalendar(month, year) {
            calendarGrid.innerHTML = '';
            for (i = 0; i < daysOfWeek.length; i++) {
                dayLabel = document.createElement('div');
                dayLabel.innerHTML = daysOfWeek[i];
                dayLabel.style.fontWeight = '700';
                dayLabel.style.fontSize = '0.6rem';
                calendarGrid.appendChild(dayLabel);
            }

            firstDay = new Date(year, month, 1).getDay();
            daysInMonth = new Date(year, month + 1, 0).getDate();

            monthYear.innerHTML = new Date(year, month).toLocaleString('pt-BR', { month: 'long', year: 'numeric' });

            for (i = 0; i < firstDay; i++) {
                emptyCell = document.createElement('div');
                calendarGrid.appendChild(emptyCell);
            }

            for (day = 1; day <= daysInMonth; day++) {
                dayCell = document.createElement('div');
                dayCell.innerHTML = day;
                dayCell.style.padding = '0.2rem';
                dayCell.style.borderRadius = '0.2rem';
                dayCell.style.cursor = 'pointer';
                if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                    dayCell.style.backgroundColor = '#F29F05';
                    dayCell.style.color = '#FFFFFF';
                }
                dayCell.addEventListener('click', function(e) {
                    alert('Data selecionada: ' + e.target.innerHTML + '/' + (month + 1) + '/' + year);
                    localStorage.setItem("data", `${e.target.innerHTML}/${month + 1}/${year}`);
                });
                dayCell.addEventListener('mouseover', function(e) {
                    if (!(e.target.innerHTML == today.getDate() && month === today.getMonth() && year === today.getFullYear())) {
                        e.target.style.backgroundColor = '#D96C9F';
                        e.target.style.color = '#FFFFFF';
                    }
                });
                dayCell.addEventListener('mouseout', function(e) {
                    if (!(e.target.innerHTML == today.getDate() && month === today.getMonth() && year === today.getFullYear())) {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#000000';
                    }
                });
                calendarGrid.appendChild(dayCell);
            }

            localStorage.setItem('calendarMonth', month);
            localStorage.setItem('calendarYear', year);
        }

        prevButton.addEventListener('click', function() {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            renderCalendar(currentMonth, currentYear);
        });

        nextButton.addEventListener('click', function() {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar(currentMonth, currentYear);
        });

        renderCalendar(currentMonth, currentYear);
    }
}); 