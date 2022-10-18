export interface Navigation {
  title: string;
  icon: 'links' | 'profile' | 'team';
  routerLink: string[]
}

export const navigation: Navigation[] = [
  {
    title: 'Caracteres',
    icon: 'profile',
    routerLink: ['characters']
  },
  {
    title: 'Links',
    icon: 'links',
    routerLink: ['links']
  },
  {
    title: 'Time',
    icon: 'team',
    routerLink: ['team']
  }
]
