import type { IconType } from "react-icons";
import { FiGrid, FiHome, FiLock } from "react-icons/fi";

export type MenuItemType = {
  key: string;
  label: string;
  isTitle?: boolean;
  icon?: IconType;
  url?: string;
  parentKey?: string;
  target?: string;
  badge?: {
    variant: string;
    text: string;
  };
  children?: MenuItemType[];
};

export const VERTICAL_MENU_ITEMS: MenuItemType[] = [
  {
    key: "main",
    label: "Main",
    isTitle: true,
  },
  {
    key: "personal",
    icon: FiHome,
    label: "Personal",
    isTitle: false,
    children: [
      {
        key: "register",
        label: "Registro de Personal",
        url: "/personal/register",
        parentKey: "personal",
      },
      {
        key: "ds-sales",
        label: "Ingreso de Personal",
        url: "/dashboards/sales",
        parentKey: "dashboard",
      },
      {
        key: "ds-sales",
        label: "Asistencia",
        url: "/dashboards/sales",
        parentKey: "dashboard",
      },
      {
        key: "ds-sales",
        label: "Planilla",
        url: "/dashboards/sales",
        parentKey: "dashboard",
      },
      {
        key: "ds-sales",
        label: "Pago de Planilla",
        url: "/dashboards/sales",
        parentKey: "dashboard",
      },
      {
        key: "ds-sales",
        label: "Boleta de Pago",
        url: "/dashboards/sales",
        parentKey: "dashboard",
      },
      {
        key: "ds-sales",
        label: "Salida de Personal",
        url: "/dashboards/sales",
        parentKey: "dashboard",
      },
      {
        key: "ds-sales",
        label: "Tramites",
        url: "/dashboards/sales",
        parentKey: "dashboard",
      },
    ],
  },
  {
    key: "apps",
    icon: FiGrid,
    label: "Modulo de Auxiliares",
    isTitle: false,
    children: [
      {
        key: "apps-email",
        label: "Email",
        isTitle: false,
        parentKey: "apps",
        children: [
          {
            key: "email-inbox",
            label: "Inbox",
            url: "/apps/email/inbox",
            parentKey: "apps-email",
          },
          {
            key: "email-read",
            label: "Read Email",
            url: "/apps/email/read",
            parentKey: "apps-email",
          },
        ],
      },
      {
        key: "apps-chat",
        label: "Chat",
        url: "/apps/chat",
        parentKey: "apps",
      },
      {
        key: "apps-contact-list",
        label: "Contact List",
        url: "/apps/contact-list",
        parentKey: "apps",
      },
      {
        key: "apps-calendar",
        label: "Calendar",
        url: "/apps/calendar",
        parentKey: "apps",
      },
      {
        key: "apps-file-manager",
        label: "File Manager",
        url: "/apps/file-manager",
        parentKey: "apps",
      },
      {
        key: "apps-invoice",
        label: "Invoice",
        url: "/apps/invoice",
        parentKey: "apps",
      },
      {
        key: "apps-tasks",
        label: "Tasks",
        url: "/apps/tasks",
        parentKey: "apps",
      },
      {
        key: "apps-projects",
        label: "Projects",
        isTitle: false,
        parentKey: "apps",
        children: [
          {
            key: "projects-overview",
            label: "Overview",
            url: "/apps/projects/overview",
            parentKey: "apps-overview",
          },
          {
            key: "projects-project",
            label: "Project",
            url: "/apps/projects/project",
            parentKey: "apps-project",
          },
          {
            key: "projects-board",
            label: "Board",
            url: "/apps/projects/board",
            parentKey: "apps-board",
          },
          {
            key: "projects-teams",
            label: "Teams",
            url: "/apps/projects/teams",
            parentKey: "apps-teams",
          },
          {
            key: "projects-files",
            label: "Files",
            url: "/apps/projects/files",
            parentKey: "apps-files",
          },
          {
            key: "projects-new-project",
            label: "New Project",
            url: "/apps/projects/new-project",
            parentKey: "apps-projects",
          },
        ],
      },
      {
        key: "apps-ecommerce",
        label: "Ecommerce",
        isTitle: false,
        parentKey: "apps",
        children: [
          {
            key: "ecommerce-products",
            label: "Products",
            url: "/apps/ecommerce/products",
            parentKey: "apps-ecommerce",
          },
          {
            key: "ecommerce-product-list",
            label: "Product List",
            url: "/apps/ecommerce/product-list",
            parentKey: "apps-ecommerce",
          },
          {
            key: "ecommerce-product-detail",
            label: "Product Detail",
            url: "/apps/ecommerce/product-detail",
            parentKey: "apps-ecommerce",
          },
          {
            key: "ecommerce-cart",
            label: "Cart",
            url: "/apps/ecommerce/cart",
            parentKey: "apps-ecommerce",
          },
          {
            key: "ecommerce-checkout",
            label: "Checkout",
            url: "/apps/ecommerce/checkout",
            parentKey: "apps-ecommerce",
          },
        ],
      },
    ],
  },
  {
    key: "auth",
    icon: FiLock,
    label: "Reportes",
    isTitle: false,
    children: [
      {
        key: "auth-login",
        label: "Log In",
        url: "/auth/login",
        parentKey: "auth",
      },
      {
        key: "auth-register",
        label: "Register",
        url: "/auth/register",
        parentKey: "auth",
      },
      {
        key: "auth-re-password",
        label: "Re Password",
        url: "/auth/recover-pw",
        parentKey: "auth",
      },
      {
        key: "auth-lock-screen",
        label: "Lock Screen",
        url: "/auth/lock-screen",
        parentKey: "auth",
      },
      {
        key: "auth-error-404",
        label: "Error 404",
        url: "/auth/auth-404",
        parentKey: "auth",
      },
      {
        key: "auth-error-500",
        label: "Error 500",
        url: "/auth/auth-500",
        parentKey: "auth",
      },
    ],
  },
  {
    key: "auth",
    icon: FiLock,
    label: "Configuración",
    isTitle: false,
    children: [
      {
        key: "auth-login",
        label: "Log In",
        url: "/auth/login",
        parentKey: "auth",
      },
      {
        key: "auth-register",
        label: "Register",
        url: "/auth/register",
        parentKey: "auth",
      },
      {
        key: "auth-re-password",
        label: "Re Password",
        url: "/auth/recover-pw",
        parentKey: "auth",
      },
      {
        key: "auth-lock-screen",
        label: "Lock Screen",
        url: "/auth/lock-screen",
        parentKey: "auth",
      },
      {
        key: "auth-error-404",
        label: "Error 404",
        url: "/auth/auth-404",
        parentKey: "auth",
      },
      {
        key: "auth-error-500",
        label: "Error 500",
        url: "/auth/auth-500",
        parentKey: "auth",
      },
    ],
  },
];
