<template>
  <div>
    <h1>Details</h1>
    <h4>SmokeSession</h4>
    <hr />
    @*<dl class="row">
    <dt class = "col-sm-2">
      @Html.DisplayNameFor(model => model.ID)
    </dt>
    <dd class = "col-sm-10">
      @Html.DisplayFor(model => model.ID)
    </dd>
    <dt class = "col-sm-2">
      @Html.DisplayNameFor(model => model.WeedPeriodID)
    </dt>
    <dd class = "col-sm-10">
      @Html.DisplayFor(model => model.WeedPeriodID)
    </dd>
    <dt class = "col-sm-2">
      @Html.DisplayNameFor(model => model.Name)
    </dt>
    <dd class = "col-sm-10">
      @Html.DisplayFor(model => model.Name)
    </dd>
    <dt class = "col-sm-2">
      @Html.DisplayNameFor(model => model.DateTime)
    </dt>
    <dd class = "col-sm-10">
      @Html.DisplayFor(model => model.DateTime)
    </dd>
    <dt class = "col-sm-2">
      @Html.DisplayNameFor(model => model.JointsSmoked)
    </dt>
    <dd class = "col-sm-10">
      @Html.DisplayFor(model => model.JointsSmoked)
    </dd>
  </dl>*@

    <p class="text-danger">@TempData["msg"]</p>
    <div class="list-group-item  flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">@Model.Name</h5>
        <small>@Model.DateTime.ToString("dd/MM/yyyy")</small>
      </div>
      <hr />
      <h6 class="mb-1">Joints smoked: @Model.JointsSmoked </h6>
      <div class="d-flex w-100 justify-content-between">
        <button v-on:click="register" class="btn btn-primary" type="submit">Account aanmaken </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "SmokeSessionDetails"
}
</script>

<style scoped>

</style>