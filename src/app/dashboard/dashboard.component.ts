import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  companyName: string = 'Cooper and Associates';
  PaymentLastDate: Date = new Date('2024-06-30');;
  isSettingsDialogOpen: boolean = false;
  constructor() {
    // Register Chart.js components
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart(): void {
    const ctx = document.getElementById('paySummaryChart') as HTMLCanvasElement;

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Net Pay',
          data: [3000, 2900, 3200, 3100, 3300, 3400, 3500, 3600, 3700, 3800, 3900, 4000],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          stack: 'Stack 0',
        },
        {
          label: 'Deductions',
          data: [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600],
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
          stack: 'Stack 0',
        }
        // {
        //   label: 'Gross Pay',
        //   data: [3500, 3500, 3900, 3900, 4200, 4400, 4600, 4800, 5000, 5200, 5400, 5600],
        //   backgroundColor: 'rgba(153, 102, 255, 0.6)',
        //   stack: 'Stack 1',
        // }
      ]
    };

    const options = {
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function (tooltipItem: any) {
              return tooltipItem.dataset.label + ': $' + tooltipItem.raw;
            }
          }
        }
      }
    };

    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  }


  openSettingsDialog(): void {
    this.isSettingsDialogOpen = true;
  }

  closeSettingsDialog(): void {
    this.isSettingsDialogOpen = false;
  }

  onOptionSelected(option: string): void {
    console.log('Selected option:', option);
    this.closeSettingsDialog();
  }

}