import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorToolsService {
  constructor() {}

  public getContrastRatio = (color: string) => {
    if (color) {
      const lumA: any = this.getLuminanace(this.hexToRgb(color || '#000'));
      const lumB: any = this.getLuminanace(this.hexToRgb('#ffffff'));
      return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
    }
    return '#000';
  };

  public getLuminanace = (values: any) => {
    if (values && values.length > 0) {
      const rgb = values.map((v: any) => {
        const val = v / 255;
        return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
      });
      return Number(
        (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)
      );
    }
    return '';
  };

  public hexToRgb(hex: string) {
    if (hex && hex.length > 0) {
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, (m: any, r: any, g: any, b: any) => {
        return r + r + g + g + b + b;
      });

      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16),
          ]
        : null;
    } else {
      return null;
    }
  }
}
