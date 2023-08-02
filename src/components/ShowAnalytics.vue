<template>
    <div v-if="show">
    <h1>Analytics for {{show.title}}</h1>
    <canvas class="container" id="chartId" aria-label="chart" height="600" width="850"></canvas>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.1.1/chart.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.1.1/helpers.esm.min.js">
    </script>
    <script>
    let data = JSON.parse('{{ rating_list | tojson }}');
    console.log(data)
      var chart = document.getElementById("chartId").getContext("2d");
      var chartId = new Chart(chart, {
         type: 'bar',
         data: {
            labels: ["1Star", "2Star", "3Star", "4Star", "5Star",],
            datasets: [{
               label: "Ratings Count",
               data: [data[0], data[1], data[2], data[3], data[4]],
               backgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'lightblue',],
               borderColor: ['red', 'blue', 'fuchsia', 'green', 'navy',],
               borderWidth: 2,
            }],
         },
         options: {
            responsive: false,
         },
      });
    </script>
    </div>
</template>

    <style>
        body{
         background-color: aliceblue;
			text-align: center;
         align-items: center;
		}
        canvas{
            margin: 0 auto;
        }
    </style>

<script>
export default {
    name: 'ShowAnalytics',
    data(){
        return {
            show: null,
        }
    },
    created(){
        this.getData();
    },
    methods: {
        async getData(){
      try {
        const response = await axios.get(`https://ticketshow-api.onrender.com/analytics/${this.$route.params.showid}`);
        this.show = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
        }
    }
}
</script>