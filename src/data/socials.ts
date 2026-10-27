import { Github, Linkedin, Mail, type LucideIcon } from 'lucide-react';

export interface SocialLink {
    label: string;
    href: string;
    icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
    { label: 'Email', href: 'mailto:lucachaboissier@outlook.fr', icon: Mail },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/luca-chaboissier/', icon: Linkedin },
    { label: 'GitHub', href: 'https://github.com/lchbssr', icon: Github },
];
