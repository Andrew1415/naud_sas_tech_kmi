import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly weight = signal<number | null>(null);
  protected readonly height = signal<number | null>(null);

  protected readonly bmi = computed(() => {
    const weight = this.weight();
    const height = this.height();

    if (!weight || !height) {
      return null;
    }

    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
  });

  protected readonly formattedBmi = computed(() => {
    const bmi = this.bmi();
    return bmi === null ? '-' : bmi.toFixed(2);
  });
}
