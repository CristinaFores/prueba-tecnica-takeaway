export interface Point {
  x: number;
  y: number;
}

export interface TextLine {
  regionId: string;
  id: string;
  text: string;
  points: Point[];
  contour?: { exterior: Point[] };
  note?: string;
}

export interface ModalNote {
  open?: boolean;
  note?: string;
  regions?: TextLine;
  textModal?: string;
}

export interface TableRegions {
  text_lines: TextLine;
}

export interface TextResponse {
  textRegions: TextLine;
}
