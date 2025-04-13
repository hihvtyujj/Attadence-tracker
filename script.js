let attendanceData = [];

function markAttendance() {
    const studentName = document.getElementById("student-name").value;
    if (studentName === "") {
        alert("Please enter a student name.");
        return;
    }

    // Add new attendance record
    const attendance = {
        name: studentName,
        status: "Present"
    };
    attendanceData.push(attendance);
    
    // Clear input field
    document.getElementById("student-name").value = "";

    // Update attendance table
    updateAttendanceTable();
}

function updateAttendanceTable() {
    const tableBody = document.getElementById("attendance-table");
    tableBody.innerHTML = "";

    // Populate the table with attendance data
    attendanceData.forEach((attendance, index) => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = attendance.name;
        row.appendChild(nameCell);

        const statusCell = document.createElement("td");
        statusCell.textContent = attendance.status;
        row.appendChild(statusCell);

        tableBody.appendChild(row);
    });
}
