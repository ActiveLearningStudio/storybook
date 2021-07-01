export const Stylesheetused = `
@import 'assets/css/index';

.dashboard-page {
  .title {
    color: #607a9b;
    font-family: $rubik, sans-serif;
    font-weight: 700;
    font-size: 22px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .dashboard-panel {
    background: white;
    border-radius: 8px;
  }

  .dashboard-panel-header-row {
    border-left: solid 5px #607a9b;
  }

  .btn {
    background-color: mediumaquamarine;
    border-color: mediumaquamarine;
  }

  label {
    font-weight: bold;
    margin-right: 0.5em;
  }

  .offer-panel {
    border: solid 3px #607a9b;
  }

  .metrics-counters span {
    display: block;
    color: cadetblue;
    font-weight: bold;
    font-size: xx-large;
  }

  .count {
    cursor: pointer;
  }
}

.swal2-html-container ul {
  list-style: circle;
  font-weight: normal;
  text-align: initial;
}
`
