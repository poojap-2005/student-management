

function AttendancePage() {
  return (
    <div className="attendance-container">
      <h1>Attendance Management</h1>

      <div className="summary">
        <div className="card">
          <h3>Present</h3>
          <p>45</p>
        </div>

        <div className="card">
          <h3>Absent</h3>
          <p>5</p>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>101</td>
            <td>Rahul</td>
            <td>Present</td>
          </tr>

          <tr>
            <td>102</td>
            <td>Priya</td>
            <td>Absent</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AttendancePage;