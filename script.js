var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

$(window).on("load", function () {
  var values = JSON.parse(sessionStorage.getItem("values"));
  console.log(values);
  $(".var-vlan").append(values[0]);
  $(".var-ont").append(values[1]);
  $(".var-f").append(values[2]);
  $(".var-s").append(values[3]);
  $(".var-p").append(values[4]);
  $(".var-vlanTel").append(values[5]);
});

$("#username").keyup(function () {
  $("#telno").val($("#username").val());
});

$("main")
  .find("button")
  .click(function () {
    console.log($(this).closest("div")[0].outerText);

    text = $(this).closest("div")[0].outerText;

    if ($(this).closest("div")[0].outerText.includes("sippstnuser")) {
      var values = JSON.parse(sessionStorage.getItem("values"));

      console.log(values);

      text = `sippstnuser add ${values[4]} ${values[1]} 1 mgid 1 username ${$(
        "#username"
      ).val()} telno ${$("#telno").val()} password ${$("#password").val()}`;
    }

    navigator.clipboard.writeText(text).then(
      function () {
        $(".toast").toast("show");
      },
      function () {
        alert("Erro ao copiar!");
      }
    );

    var html = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
  </svg>`;
    $(this).html(html);
  });
