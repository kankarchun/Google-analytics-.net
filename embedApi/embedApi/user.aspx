<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="user.aspx.cs" Inherits="FacebookLoginASPnetWebForms.account.user" %>

<%@ Register assembly="System.Web.DataVisualization, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" namespace="System.Web.UI.DataVisualization.Charting" tagprefix="asp" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="../analyticstracking.js" type="text/javascript"></script>
    
    <script src="../embedAPI.js" type="text/javascript"></script>
    <script src="../date-range-selector.js" type="text/javascript"></script>
    <script src="../embedAPI_query.js" type="text/javascript"></script>
    <%--<script src="../embedAPI_query_withoutLabel.js" type="text/javascript"></script>--%>
</head>
<body>
    <form id="form1" runat="server">
        <div id="auth-button"></div>
        <div id="view-selector"></div>
        <div id="date-range-selector-1-container"></div>

        <div id="timeline"></div>
        <div id="main-chart-container"></div>
        <div id="breakdown-chart-container"></div>
        <div id="visitorType-chart-container"></div>
        <div id="country-chart-container"></div>
        <div id="frequency-chart-container"></div>
        <div id="day7-chart-container"></div>
        <div id="engagement-chart-container"></div>
        <div id="source-chart-container"></div>
        <div id="browser-chart-container"></div>
        <div id="traffic-chart-container"></div>
        <div id="provider-chart-container"></div>
    </form>
</body>
</html>
