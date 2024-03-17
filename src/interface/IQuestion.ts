export interface IOption {
  icon: string;
  hoverLabel: string;
}

export interface IQuestion {
    title: string;
    options: Array<IOption>;
    answer?: string;
}