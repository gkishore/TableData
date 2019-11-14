export interface DataGridColumnDefn {
  name: string;
  displayName?: string;
  sortable?: boolean;
  sortDirection?: 'asc' | 'desc';
  sortArrow?: string;
  templateFn?: Function;
  width?: string;
}

export interface Pagination { 
  number: number;
  size: number;
  options: number[];
  totalPages?: number;
  isFirst?: boolean;
  isLast?: boolean;
}