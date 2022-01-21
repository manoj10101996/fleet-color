import { Component, OnInit } from '@angular/core';
import { ColorToolsService } from './color-tools.service';
import { COLORS } from './COLORS';
declare var UIkit: any;
interface colorObject {
  name: string;
  hex: string;
}
@Component({
  selector: 'app-color-fleet',
  templateUrl: './color-fleet.component.html',
  styleUrls: ['./color-fleet.component.scss'],
})
export class ColorFleetComponent implements OnInit {
  public colorsAvailable: Array<colorObject> = COLORS;
  public filteredColors: Array<colorObject> = [];
  public colorName: string = '';

  constructor(public colorTool: ColorToolsService) {
    for (let index = 0; index < this.filteredColors.length; index++) {
      this.filteredColors[index]['name'] =
        this.filteredColors[index]['name'].toLowerCase();
    }
  }

  ngOnInit(): void {}

  public filterColors = () => {
    if (this.colorName && this.colorName.length > 2) {
      this.filteredColors = [];
      this.filteredColors = this.colorsAvailable.filter((color) => {
        color.name = color.name.toLowerCase();
        return color.name.includes(this.colorName.toLowerCase());
      });
    }
  };

  public getContrast(color: any) {
    return this.colorTool.getContrastRatio(color);
  }

  public copy(color: any) {
    const event = (e: any) => {
      e.clipboardData.setData('text/plain', color['hex']);
      e.preventDefault();
      window.localStorage.setItem('copied', color['hex']);
      UIkit.notification({
        message: color['name'] + ' copied',
        status: 'primary',
        pos: 'top-right',
        timeout: 2000,
      });

      document.removeEventListener('copy', e);
    };
    document.addEventListener('copy', event);
    document.execCommand('copy');
  }
}
