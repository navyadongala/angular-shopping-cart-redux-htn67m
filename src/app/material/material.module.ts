import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [CommonModule],
  exports: [MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule, MatBadgeModule, MatTooltipModule, MatListModule]
})
export class MaterialModule {}
