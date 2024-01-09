$(document).ready(function () {
    // Function to display current date
    function displayDate() {
      const currentDate = dayjs().format("dddd, MMMM D, YYYY");
      $("h1").text(`Work Day Scheduler - ${currentDate}`);
    }

    // Function to load events from local storage
  function loadEvents() {
    const events = JSON.parse(localStorage.getItem("events")) || {};

    for (const hour in events) {
      const eventText = events[hour];
      $(`#${hour}`).val(eventText);
    }
  }
  
  // Function to save events to local storage
  function saveEvents() {
    const events = {};

    $(".event input").each(function () {
      const hour = $(this).attr("id");
      const eventText = $(this).val();
      events[hour] = eventText;
    });

    localStorage.setItem("events", JSON.stringify(events));
  }

