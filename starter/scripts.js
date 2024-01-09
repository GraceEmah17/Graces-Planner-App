$(document).ready(function () {
    // Function to display current date
    function displayDate() {
      const currentDate = dayjs().format("dddd, MMMM D, YYYY");
      $("h1").text(`Work Day Scheduler - ${currentDate}`);
    }

    