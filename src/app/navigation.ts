export interface Navigation {
  title: string;
  icon: 'history' | 'profile' | 'team';
  routerLink: string[]
}

export const navigation: Navigation[] = [
  {
    title: 'Caracteres',
    icon: 'profile',
    routerLink: ['characters']
  },
  {
    title: 'História',
    icon: 'history',
    routerLink: ['history']
  },
  {
    title: 'Time',
    icon: 'team',
    routerLink: ['team']
  }
]
