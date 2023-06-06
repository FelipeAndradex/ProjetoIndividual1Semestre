// Abrir a sidebar

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function OpenSideBar() {
    if (!sidebarOpen)
        sidebar.classList.add("sidebar_responsive")
    sidebarOpen = true;
}

function CloseSideBar() {
    if (sidebarOpen)
        sidebar.classList.remove("sidebar_responsive")
    sidebarOpen = false;
}


// Gráficos 
var barChartOptions = {
    series: [{
        data: [10, 9.5, 9, 8, 7],
        name: "Nota",
    }],
    chart: {
        type: "bar",
        background: "transparent",
        height: 350,
        toolbar: {
            show: false,
        },
    },
    colors: [
        "var(--main-color)",
        "#d50000",
        "#2e7d32",
        "#ff6d00",
        "#583cb3",
    ],
    plotOptions: {
        bar: {
            distribuited: true,
            borderRadius: 4,
            horizontal: false,
            columnWidth: "40%",
        }
    },
    dataLabels: {
        enable: false,
    },
    fill: {
        opacity: 1,
    },
    grid: {
        borderColor: "#55596e",
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: "#f5f7ff",
        },
        show: true,
        position: "top",
    },
    stroke: {
        colors: ["transparent"],
        show: true,
        width: 2
    },
    tooltip: {
        shared: true,
        intersect: false,
        theme: "dark",
    },
    xaxis: {
        categories: ["Felipe Andrade", "Matheus", "João", "Evelyn", "Brenda"],
        title: {
            style: {
                color: "#fef7ff",
            },
        },
        axisBorder: {
            show: true,
            color: "#55596e",
        },
        labels: {
            style: {
                colors: "#f5f7ff",
            },
        },
    },
    yaxis: {
        title: {
            text: "Média",
            style: {
                color: "#f5f7ff",
            },
        },
        axisBorder: {
            color: "#55596e",
            show: true,
        },
        axisTicks: {
            color: "55596e",
            show: true,
        },
        labels: {
            style: {
                colors: "#f5f7ff"
            },
        },
    },
};

var barChart = new ApexCharts(document.querySelector("#bar_chart"), barChartOptions);
barChart.render();

// Gráficos 
var areaChartOptions = {
    series: [{
        data: [10, 8, 6, 4],
        name: "Products",
    }],
    chart: {
        type: "bar",
        background: "transparent",
        height: 350,
        toolbar: {
            show: false,
        },
    },
    colors: [
        "var(--main-color)",
        "#d50000",
        "#2e7d32",
        "#ff6d00",
        "#583cb3",
    ],
    plotOptions: {
        bar: {
            distribuited: true,
            borderRadius: 4,
            horizontal: false,
            columnWidth: "40%",
        }
    },
    dataLabels: {
        enable: false,
    },
    fill: {
        opacity: 1,
    },
    grid: {
        borderColor: "#55596e",
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: "#f5f7ff",
        },
        show: true,
        position: "top",
    },
    stroke: {
        colors: ["transparent"],
        show: true,
        width: 2
    },
    tooltip: {
        shared: true,
        intersect: false,
        theme: "dark",
    },
    xaxis: {
        categories: ["Tecnologia", "Física", "Matemática", "Conhecimentos Gerais"],
        title: {
            style: {
                color: "#fef7ff",
            },
        },
        axisBorder: {
            show: true,
            color: "#55596e",
        },
        labels: {
            style: {
                colors: "#f5f7ff",
            },
        },
    },
    yaxis: {
        title: {
            text: "Média",
            style: {
                color: "#f5f7ff",
            },
        },
        axisBorder: {
            color: "#55596e",
            show: true,
        },
        axisTicks: {
            color: "55596e",
            show: true,
        },
        labels: {
            style: {
                colors: "#f5f7ff"
            },
        },
    },
};

var areaChart = new ApexCharts(document.querySelector("#area_chart"), areaChartOptions);
areaChart.render();