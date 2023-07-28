import { a as jsx, j as jsxs, F as Fragment } from "../ssr.js";
import { createContext, useState, useContext, Fragment as Fragment$1 } from "react";
import { Link } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import "mqtt-vue-hook";
const DropDownContext$2 = createContext();
const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsx(DropDownContext$2.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsx("div", { className: "relative", children }) });
};
const Trigger$2 = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext$2);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { onClick: toggleOpen, children }),
    open && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40", onClick: () => setOpen(false) })
  ] });
};
const Content$2 = ({ align = "right", width = "48", contentClasses = "py-1 bg-white", children }) => {
  const { open, setOpen } = useContext(DropDownContext$2);
  let alignmentClasses = "origin-top";
  if (align === "left") {
    alignmentClasses = "origin-top-left left-0";
  } else if (align === "right") {
    alignmentClasses = "origin-top-right right-0";
  }
  let widthClasses = "";
  if (width === "48") {
    widthClasses = "w-48";
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Transition,
    {
      as: Fragment$1,
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`,
          onClick: () => setOpen(false),
          children: /* @__PURE__ */ jsx("div", { className: `rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses, children })
        }
      )
    }
  ) });
};
const DropdownLink$2 = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out " + className,
      children
    }
  );
};
Dropdown.Trigger = Trigger$2;
Dropdown.Content = Content$2;
Dropdown.Link = DropdownLink$2;
const Dropdown$1 = Dropdown;
function NavLink({ active = false, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " + (active ? "border-indigo-400 text-gray-900 focus:border-indigo-700 " : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ") + className,
      children
    }
  );
}
function ResponsiveNavLink({ active = false, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: `w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${active ? "border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`,
      children
    }
  );
}
const DropDownContext$1 = createContext();
const NavLinkParent = ({ active, children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsx(DropDownContext$1.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsx("div", { className: active ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out relative" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out relative", children }) });
};
const Trigger$1 = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext$1);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { onClick: toggleOpen, children }),
    open && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40", onClick: () => setOpen(false) })
  ] });
};
const Content$1 = ({ align = "right", width = "48", contentClasses = "py-1 bg-white", children }) => {
  const { open, setOpen } = useContext(DropDownContext$1);
  let alignmentClasses = "origin-top";
  if (align === "left") {
    alignmentClasses = "origin-top-left left-0";
  } else if (align === "right") {
    alignmentClasses = "origin-top-right right-0";
  }
  let widthClasses = "";
  if (width === "48") {
    widthClasses = "w-48";
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Transition,
    {
      as: Fragment$1,
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute z-50 top-14 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`,
          onClick: () => setOpen(false),
          children: /* @__PURE__ */ jsx("div", { className: `rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses, children })
        }
      )
    }
  ) });
};
const DropdownLink$1 = ({ href, method, as, children }) => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      href,
      method,
      as,
      className: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",
      children
    }
  );
};
NavLinkParent.Trigger = Trigger$1;
NavLinkParent.Content = Content$1;
NavLinkParent.Link = DropdownLink$1;
const NavLinkParent$1 = NavLinkParent;
const DropDownContext = createContext();
const ResponsiveNavLinkParent = ({ active, children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsx(DropDownContext.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsx(
    "div",
    {
      className: `w-full flex flex-col items-start pl-3 pr-4 py-2 border-l-4 ${active ? "border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700" : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out`,
      children
    }
  ) });
};
const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { onClick: toggleOpen, children }) });
};
const Content = ({ align = "right", width = "48", contentClasses = "py-1 bg-white", children }) => {
  const { open, setOpen } = useContext(DropDownContext);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Transition,
    {
      as: Fragment$1,
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "w-full border border-gray-300 mt-3",
          onClick: () => setOpen(false),
          children: /* @__PURE__ */ jsx("div", { className: `w-full rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses, children })
        }
      )
    }
  ) });
};
const DropdownLink = ({ href, method, as, children, active }) => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      href,
      method,
      as,
      className: `block w-full px-4 py-2 text-left text-sm leading-5 ${active ? "bg-gray-100" : ""}
                text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out`,
      children
    }
  );
};
ResponsiveNavLinkParent.Trigger = Trigger;
ResponsiveNavLinkParent.Content = Content;
ResponsiveNavLinkParent.Link = DropdownLink;
const ResponsiveNavLinkParent$1 = ResponsiveNavLinkParent;
function Authenticated({ user, header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsxs("nav", { className: "bg-white border-b border-gray-100", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between h-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ jsx("div", { className: "shrink-0 flex items-center", children: /* @__PURE__ */ jsx(Link, { href: "/dashboard", children: /* @__PURE__ */ jsx("img", { src: "/images/logo/efishy.png", width: "50px" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden space-x-8 sm:-my-px sm:ml-10 sm:flex", children: [
            /* @__PURE__ */ jsx(NavLink, { href: route("dashboard"), active: route().current("dashboard"), children: "Dashboard" }),
            /* @__PURE__ */ jsxs(NavLinkParent$1, { active: route().current("kualitas-air*"), children: [
              /* @__PURE__ */ jsx(NavLinkParent$1.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  className: "text-left inline-flex items-center px-3  border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",
                  children: [
                    "Kualitas Air",
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: "ml-2 -mr-0.5 h-4 w-4",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /* @__PURE__ */ jsx(
                          "path",
                          {
                            fillRule: "evenodd",
                            d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                            clipRule: "evenodd"
                          }
                        )
                      }
                    )
                  ]
                }
              ) }) }),
              /* @__PURE__ */ jsxs(NavLinkParent$1.Content, { children: [
                /* @__PURE__ */ jsx(NavLinkParent$1.Link, { href: route("kualitas-air.suhu.index"), children: "Suhu" }),
                /* @__PURE__ */ jsx(NavLinkParent$1.Link, { href: route("kualitas-air.sensor-ph.index"), children: "Ph" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(NavLinkParent$1, { active: route().current("*pakan*"), children: [
              /* @__PURE__ */ jsx(NavLinkParent$1.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  className: "text-left inline-flex items-center px-3  border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",
                  children: [
                    "Pakan Ikan",
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: "ml-2 -mr-0.5 h-4 w-4",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /* @__PURE__ */ jsx(
                          "path",
                          {
                            fillRule: "evenodd",
                            d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                            clipRule: "evenodd"
                          }
                        )
                      }
                    )
                  ]
                }
              ) }) }),
              /* @__PURE__ */ jsxs(NavLinkParent$1.Content, { children: [
                /* @__PURE__ */ jsx(NavLinkParent$1.Link, { href: route("pakan.sisa-pakan.index"), children: "Sisa Pakan" }),
                /* @__PURE__ */ jsx(NavLinkParent$1.Link, { href: route("pakan.atur-pakan.index"), children: "Atur Pakan" }),
                /* @__PURE__ */ jsx(NavLinkParent$1.Link, { href: route("pakan.pakan.index"), children: "Pakan" })
              ] })
            ] }),
            /* @__PURE__ */ jsx(NavLink, { href: route("report.index"), active: route().current("report.index"), children: "Report" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden sm:flex sm:items-center sm:ml-6", children: /* @__PURE__ */ jsx("div", { className: "ml-3 relative", children: /* @__PURE__ */ jsxs(Dropdown$1, { children: [
          /* @__PURE__ */ jsx(Dropdown$1.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",
              children: [
                user.name,
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "ml-2 -mr-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                )
              ]
            }
          ) }) }),
          /* @__PURE__ */ jsxs(Dropdown$1.Content, { children: [
            /* @__PURE__ */ jsx(Dropdown$1.Link, { href: route("profile.edit"), children: "Profile" }),
            /* @__PURE__ */ jsx(Dropdown$1.Link, { href: route("logout"), method: "post", as: "button", children: "Log Out" })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "-mr-2 flex items-center sm:hidden", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowingNavigationDropdown((previousState) => !previousState),
            className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",
            children: /* @__PURE__ */ jsxs("svg", { className: "h-6 w-6", stroke: "currentColor", fill: "none", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ jsx(
                "path",
                {
                  className: !showingNavigationDropdown ? "inline-flex" : "hidden",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M4 6h16M4 12h16M4 18h16"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  className: showingNavigationDropdown ? "inline-flex" : "hidden",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: "M6 18L18 6M6 6l12 12"
                }
              )
            ] })
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "pt-2 pb-3 space-y-1", children: [
          /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("dashboard"), active: route().current("dashboard"), children: "Dashboard" }),
          /* @__PURE__ */ jsxs(ResponsiveNavLinkParent$1, { active: route().current("kualitas-air.*"), children: [
            /* @__PURE__ */ jsx(ResponsiveNavLinkParent$1.Trigger, { children: /* @__PURE__ */ jsx("span", { className: " rounded-md", children: /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                children: [
                  "Kualitas Air",
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "inline-block ml-2 -mr-0.5 h-4 w-4",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  )
                ]
              }
            ) }) }),
            /* @__PURE__ */ jsxs(ResponsiveNavLinkParent$1.Content, { children: [
              /* @__PURE__ */ jsx(ResponsiveNavLinkParent$1.Link, { href: route("kualitas-air.suhu.index"), active: route().current("kualitas-air.suhu.index"), children: "Suhu" }),
              /* @__PURE__ */ jsx(ResponsiveNavLinkParent$1.Link, { href: route("kualitas-air.sensor-ph.index"), active: route().current("kualitas-air.sensor-ph.index"), children: "Sensor Ph" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(ResponsiveNavLinkParent$1, { active: route().current("pakan*"), children: [
            /* @__PURE__ */ jsx(ResponsiveNavLinkParent$1.Trigger, { children: /* @__PURE__ */ jsx("span", { className: " rounded-md", children: /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                children: [
                  "Pakan Ikan",
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "inline-block ml-2 -mr-0.5 h-4 w-4",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  )
                ]
              }
            ) }) }),
            /* @__PURE__ */ jsxs(ResponsiveNavLinkParent$1.Content, { children: [
              /* @__PURE__ */ jsx(ResponsiveNavLinkParent$1.Link, { href: route("pakan.sisa-pakan.index"), active: route().current("pakan.sisa-pakan.index"), children: "Tempat Pakan" }),
              /* @__PURE__ */ jsx(ResponsiveNavLinkParent$1.Link, { href: route("pakan.atur-pakan.index"), active: route().current("pakan.atur-pakan.index"), children: "Atur Pakan" }),
              /* @__PURE__ */ jsx(ResponsiveNavLinkParent$1.Link, { href: route("pakan.pakan.index"), active: route().current("pakan.pakan.index"), children: "Pakan" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("report.index"), active: route().current("report.index"), children: "Report" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-4 pb-1 border-t border-gray-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "px-4", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-base text-gray-800", children: user.name }),
            /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-500", children: user.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-1", children: [
            /* @__PURE__ */ jsx(ResponsiveNavLink, { href: route("profile.edit"), children: "Profile" }),
            /* @__PURE__ */ jsx(ResponsiveNavLink, { method: "post", href: route("logout"), as: "button", children: "Log Out" })
          ] })
        ] })
      ] })
    ] }),
    header && /* @__PURE__ */ jsx("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: header }) }),
    /* @__PURE__ */ jsx("main", { children })
  ] });
}
export {
  Authenticated as A
};
