import * as React from 'react';
declare type RouterStackItem = {
    component: React.ComponentType<any>;
    props: any;
};
declare function goTo(comp: React.ComponentType<any>, props?: any): void;
declare function goBack(): void;
declare function popToTop(): void;
declare function getCurrent(): RouterStackItem;
declare function getComponentStack(): RouterStackItem[];
interface LinkProps {
    id?: string;
    component: React.ComponentType<any>;
    children?: React.ReactNode;
    props?: any;
    href?: string;
    className?: string;
    tag?: React.ComponentType<any> | keyof JSX.IntrinsicElements;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
declare function Link({ id, component, children, props, href, className, tag, onClick, ...restProps }: LinkProps & React.HTMLProps<HTMLElement>): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
interface NavLinkProps {
    id?: string;
    component: React.ComponentType<any>;
    children?: React.ReactNode;
    props?: any;
    href?: string;
    className?: string;
    activeClassName?: string;
    tag?: React.ComponentType<any> | keyof JSX.IntrinsicElements;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
declare function NavLink({ id, component, children, props, href, className, activeClassName, tag, onClick, ...restProps }: NavLinkProps & React.HTMLProps<HTMLElement>): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
interface RouterProps {
    children: React.ReactNode;
}
declare function Router({ children }: RouterProps): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export { goBack, getCurrent, getComponentStack, goTo, popToTop, LinkProps, RouterProps, Link, NavLink, Router, };
