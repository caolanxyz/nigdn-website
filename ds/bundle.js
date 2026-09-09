/* @ds-bundle: {"format":4,"namespace":"NIGameDevNetworkDesignSystem_63115f","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"PlatformTag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Toaster","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Input.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"dfd87c252548","components/core/Button.jsx":"9c869ced61b8","components/core/Card.jsx":"6fcbf324955a","components/core/Icon.jsx":"791ce0eba413","components/core/IconButton.jsx":"ea8f4cb2beca","components/core/Tag.jsx":"1c5971dced75","components/feedback/Dialog.jsx":"887a9acedf65","components/feedback/Toast.jsx":"01630c7fb27d","components/feedback/Tooltip.jsx":"9ff87ff3baac","components/forms/Checkbox.jsx":"4637e5f3f57c","components/forms/Input.jsx":"f6928bc35b0f","components/forms/Radio.jsx":"c8683ad81bdc","components/forms/Select.jsx":"768053a05f0b","components/forms/Switch.jsx":"76ada1567f17","components/navigation/Tabs.jsx":"05ccec072cd6","ui_kits/website/App.jsx":"7da9642625ab","ui_kits/website/GameDetail.jsx":"dbb509d0ddc6","ui_kits/website/Games.jsx":"ebab7ed6e6ae","ui_kits/website/Home.jsx":"0faad088edf0","ui_kits/website/Jobs.jsx":"0dfb10b0fd03","ui_kits/website/PlayMyDemo.jsx":"b255de5555dd","ui_kits/website/Shell.jsx":"4d7c4524933f","ui_kits/website/data.js":"53bd166c4c87"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NIGameDevNetworkDesignSystem_63115f = window.NIGameDevNetworkDesignSystem_63115f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __sid = 'nigdn-badge';
if (typeof document !== 'undefined' && !document.getElementById(__sid)) {
  const s = document.createElement('style');
  s.id = __sid;
  s.textContent = `.nigdn-badge{display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 8px;border-radius:var(--radius-sm);font-family:var(--font-body);font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;line-height:1;white-space:nowrap}
.nigdn-badge i{width:6px;height:6px;border-radius:50%;background:currentColor}
.nigdn-badge--released{background:var(--status-success-bg);color:#0B6F66}.nigdn-badge--dev{background:var(--status-info-bg);color:#1466A3}.nigdn-badge--new{background:var(--brand-soft);color:var(--purple-800)}.nigdn-badge--award{background:var(--status-highlight-bg);color:#7A5A00}.nigdn-badge--closed{background:var(--status-danger-bg);color:#A3123F}.nigdn-badge--neutral{background:var(--ink-100);color:var(--ink-700)}`;
  document.head.appendChild(s);
}
function Badge({
  status = 'neutral',
  dot,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `nigdn-badge nigdn-badge--${status} ${className}`
  }, rest), dot && /*#__PURE__*/React.createElement("i", null), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __sid = 'nigdn-card';
if (typeof document !== 'undefined' && !document.getElementById(__sid)) {
  const s = document.createElement('style');
  s.id = __sid;
  s.textContent = `.nigdn-card{background:var(--surface-card);border:1px solid var(--border-default);border-radius:var(--radius-lg);box-shadow:var(--shadow-sm);overflow:hidden;display:flex;flex-direction:column;transition:transform var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out),border-color var(--dur-base)}
.nigdn-card--interactive{cursor:pointer;text-decoration:none;color:inherit}.nigdn-card--interactive:hover{transform:translateY(-2px);box-shadow:var(--shadow-md);border-color:var(--border-strong)}.nigdn-card--interactive:focus-visible{outline:none;box-shadow:var(--focus-ring)}
.nigdn-card--dark{background:var(--surface-dark-raised);border-color:var(--border-dark);color:var(--ink-100)}.nigdn-card--dark.nigdn-card--interactive:hover{border-color:var(--purple-500)}
.nigdn-card--flat{box-shadow:none}
.nigdn-card__media{position:relative;background:var(--ink-200);overflow:hidden}.nigdn-card__media img{display:block;width:100%;height:100%;object-fit:cover}
.nigdn-card__body{padding:var(--space-4);display:flex;flex-direction:column;gap:var(--space-2);flex:1}
.nigdn-card__title{font-family:var(--font-body);font-weight:700;font-size:16px;line-height:1.3;color:inherit;margin:0}.nigdn-card--dark .nigdn-card__title{color:#fff}
.nigdn-card__meta{font-size:13px;color:var(--text-muted);line-height:1.4}.nigdn-card--dark .nigdn-card__meta{color:var(--ink-400)}
.nigdn-card__footer{display:flex;flex-wrap:wrap;gap:6px;margin-top:auto;padding-top:var(--space-1)}`;
  document.head.appendChild(s);
}
function Card({
  variant = 'default',
  interactive,
  href,
  media,
  mediaRatio = '16/9',
  title,
  meta,
  footer,
  children,
  className = '',
  ...rest
}) {
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    className: `nigdn-card nigdn-card--${variant} ${interactive || href ? 'nigdn-card--interactive' : ''} ${className}`,
    tabIndex: interactive && !href ? 0 : undefined
  }, rest), media !== undefined && /*#__PURE__*/React.createElement("div", {
    className: "nigdn-card__media",
    style: {
      aspectRatio: mediaRatio
    }
  }, typeof media === 'string' ? /*#__PURE__*/React.createElement("img", {
    src: media,
    alt: ""
  }) : media), /*#__PURE__*/React.createElement("div", {
    className: "nigdn-card__body"
  }, title && /*#__PURE__*/React.createElement("h3", {
    className: "nigdn-card__title"
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    className: "nigdn-card__meta"
  }, meta), children, footer && /*#__PURE__*/React.createElement("div", {
    className: "nigdn-card__footer"
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useState
} = React;
const SRC = 'https://unpkg.com/lucide@0.475.0/dist/umd/lucide.min.js';
let loading = null;
function loadLucide() {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.lucide) return Promise.resolve();
  if (loading) return loading;
  loading = new Promise(res => {
    const s = document.createElement('script');
    s.src = SRC;
    s.onload = res;
    s.onerror = res;
    document.head.appendChild(s);
  });
  return loading;
}
const pascal = n => n.split('-').map(p => p[0].toUpperCase() + p.slice(1)).join('');
/** Lucide icon by name, rendered from the lucide UMD bundle (loaded once from CDN). */
function Icon({
  name,
  size = 18,
  strokeWidth = 1.75,
  color = 'currentColor',
  style,
  ...rest
}) {
  const [ready, setReady] = useState(typeof window !== 'undefined' && !!window.lucide);
  useEffect(() => {
    let ok = true;
    loadLucide().then(() => ok && setReady(true));
    return () => {
      ok = false;
    };
  }, []);
  const def = ready && window.lucide && window.lucide.icons && (window.lucide.icons[pascal(name)] || window.lucide.icons[name]);
  const nodes = Array.isArray(def) ? def : [];
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      flex: 'none',
      display: 'inline-block',
      verticalAlign: 'middle',
      ...style
    }
  }, rest), nodes.map((n, i) => React.createElement(n[0], {
    key: i,
    ...n[1]
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __sid = 'nigdn-button';
if (typeof document !== 'undefined' && !document.getElementById(__sid)) {
  const s = document.createElement('style');
  s.id = __sid;
  s.textContent = `.nigdn-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-family:var(--font-body);font-weight:600;border-radius:var(--radius-md);border:1px solid transparent;cursor:pointer;white-space:nowrap;transition:background var(--dur-base) var(--ease-out),color var(--dur-base) var(--ease-out),border-color var(--dur-base) var(--ease-out),transform var(--dur-fast) var(--ease-out),box-shadow var(--dur-base) var(--ease-out);text-decoration:none;line-height:1}
.nigdn-btn:active:not(:disabled){transform:scale(.98)}.nigdn-btn:focus-visible{outline:none;box-shadow:var(--focus-ring)}.nigdn-btn:disabled{opacity:.45;cursor:not-allowed}
.nigdn-btn--sm{height:var(--control-h-sm);padding:0 14px;font-size:14px;border-radius:var(--radius-sm)}.nigdn-btn--md{height:var(--control-h-md);padding:0 20px;font-size:15px}.nigdn-btn--lg{height:var(--control-h-lg);padding:0 26px;font-size:16px}
.nigdn-btn--primary{background:var(--brand);color:var(--text-on-brand)}.nigdn-btn--primary:hover:not(:disabled){background:var(--brand-strong)}
.nigdn-btn--secondary{background:transparent;color:var(--brand);border-color:var(--purple-300)}.nigdn-btn--secondary:hover:not(:disabled){background:var(--purple-50);border-color:var(--brand)}
.nigdn-btn--ghost{background:transparent;color:var(--text-body)}.nigdn-btn--ghost:hover:not(:disabled){background:var(--ink-100)}
.nigdn-btn--danger{background:var(--status-danger);color:#fff}.nigdn-btn--danger:hover:not(:disabled){filter:brightness(.92)}
.nigdn-btn--inverse{background:#fff;color:var(--purple-800)}.nigdn-btn--inverse:hover:not(:disabled){background:var(--purple-100)}
.nigdn-btn--glow{box-shadow:var(--shadow-brand)}`;
  document.head.appendChild(s);
}
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  glow,
  href,
  children,
  className = '',
  ...rest
}) {
  const Tag = href ? 'a' : 'button';
  const iconSize = size === 'sm' ? 16 : 18;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    className: `nigdn-btn nigdn-btn--${variant} nigdn-btn--${size} ${glow ? 'nigdn-btn--glow' : ''} ${className}`
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: iconSize
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __sid = 'nigdn-iconbutton';
if (typeof document !== 'undefined' && !document.getElementById(__sid)) {
  const s = document.createElement('style');
  s.id = __sid;
  s.textContent = `.nigdn-ibtn{display:inline-grid;place-items:center;border-radius:var(--radius-md);border:1px solid transparent;cursor:pointer;color:var(--text-body);background:transparent;transition:background var(--dur-base) var(--ease-out),transform var(--dur-fast)}.nigdn-ibtn:hover:not(:disabled){background:var(--ink-100)}.nigdn-ibtn:active:not(:disabled){transform:scale(.96)}.nigdn-ibtn:focus-visible{outline:none;box-shadow:var(--focus-ring)}.nigdn-ibtn:disabled{opacity:.45;cursor:not-allowed}
.nigdn-ibtn--outline{border-color:var(--border-default);background:var(--surface-card)}.nigdn-ibtn--outline:hover:not(:disabled){border-color:var(--border-strong);background:var(--ink-50)}
.nigdn-ibtn--filled{background:var(--brand);color:#fff}.nigdn-ibtn--filled:hover:not(:disabled){background:var(--brand-strong)}
.nigdn-ibtn--dark{color:var(--ink-200)}.nigdn-ibtn--dark:hover:not(:disabled){background:rgba(255,255,255,.08);color:#fff}`;
  document.head.appendChild(s);
}
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  className = '',
  ...rest
}) {
  const px = size === 'sm' ? 36 : size === 'lg' ? 52 : 44;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    className: `nigdn-ibtn nigdn-ibtn--${variant} ${className}`,
    style: {
      width: px,
      height: px
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 16 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __sid = 'nigdn-tag';
if (typeof document !== 'undefined' && !document.getElementById(__sid)) {
  const s = document.createElement('style');
  s.id = __sid;
  s.textContent = `.nigdn-tag{display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 10px;border-radius:var(--radius-pill);font-family:var(--font-body);font-size:12px;font-weight:600;line-height:1;white-space:nowrap;border:1px solid transparent}
.nigdn-tag--neutral{background:var(--ink-100);color:var(--ink-700)}.nigdn-tag--brand{background:var(--brand-soft);color:var(--purple-800)}.nigdn-tag--outline{background:transparent;border-color:var(--border-default);color:var(--text-body)}.nigdn-tag--dark{background:rgba(255,255,255,.1);color:var(--ink-100)}
.nigdn-tag--sm{height:20px;font-size:11px;padding:0 8px}.nigdn-tag--removable{padding-right:6px}.nigdn-tag button{all:unset;cursor:pointer;display:grid;place-items:center;width:14px;height:14px;border-radius:50%;font-size:12px;line-height:1;opacity:.7}.nigdn-tag button:hover{opacity:1;background:rgba(0,0,0,.08)}`;
  document.head.appendChild(s);
}
function Tag({
  variant = 'neutral',
  size = 'md',
  onRemove,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `nigdn-tag nigdn-tag--${variant} nigdn-tag--${size} ${onRemove ? 'nigdn-tag--removable' : ''} ${className}`
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: onRemove
  }, "\xD7"));
}
/** Platform label under a game: Windows, Mac, Linux, PS5, Xbox Series S|X, Nintendo Switch, iOS, Android, Oculus (Meta) Quest */
function PlatformTag({
  platform,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Tag, _extends({
    variant: "neutral",
    size: "sm"
  }, rest), platform);
}
Object.assign(__ds_scope, { Tag, PlatformTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const {
  useEffect
} = React;
const __sid = 'nigdn-dialog';
if (typeof document !== 'undefined' && !document.getElementById(__sid)) {
  const s = document.createElement('style');
  s.id = __sid;
  s.textContent = `.nigdn-dialog__scrim{position:fixed;inset:0;background:rgba(14,10,26,.6);backdrop-filter:blur(4px);display:grid;place-items:center;padding:24px;z-index:1000;animation:nigdn-fade var(--dur-base) var(--ease-out)}
.nigdn-dialog{background:var(--surface-card);border-radius:var(--radius-xl);box-shadow:var(--shadow-lg);width:100%;max-width:520px;font-family:var(--font-body);color:var(--text-body);animation:nigdn-rise var(--dur-slow) var(--ease-out);overflow:hidden}
.nigdn-dialog__head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:24px 24px 0}.nigdn-dialog__title{margin:0;font-size:22px;font-weight:800;color:var(--text-heading);line-height:1.25}.nigdn-dialog__desc{margin:6px 0 0;font-size:15px;color:var(--text-muted);line-height:1.5}
.nigdn-dialog__body{padding:20px 24px}.nigdn-dialog__foot{display:flex;justify-content:flex-end;gap:10px;padding:0 24px 24px}
@keyframes nigdn-fade{from{opacity:0}}@keyframes nigdn-rise{from{opacity:0;transform:translateY(8px)}}`;
  document.head.appendChild(s);
}
function Dialog({
  open,
  onClose,
  title,
  description,
  footer,
  children,
  width,
  inline
}) {
  useEffect(() => {
    if (!open || inline) return;
    const k = e => e.key === 'Escape' && onClose && onClose();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose, inline]);
  if (!open) return null;
  const panel = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": !inline,
    "aria-label": typeof title === 'string' ? title : undefined,
    className: "nigdn-dialog",
    style: {
      maxWidth: width
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "nigdn-dialog__head"
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("h2", {
    className: "nigdn-dialog__title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "nigdn-dialog__desc"
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    onClick: onClose
  })), children && /*#__PURE__*/React.createElement("div", {
    className: "nigdn-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "nigdn-dialog__foot"
  }, footer));
  return inline ? panel : /*#__PURE__*/React.createElement("div", {
    className: "nigdn-dialog__scrim",
    onClick: onClose
  }, panel);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __sid = 'nigdn-toast';
if (typeof document !== 'undefined' && !document.getElementById(__sid)) {
  const s = document.createElement('style');
  s.id = __sid;
  s.textContent = `.nigdn-toast{display:flex;align-items:flex-start;gap:12px;padding:14px 16px;border-radius:var(--radius-lg);background:var(--surface-dark-raised);color:#fff;box-shadow:var(--shadow-lg);font-family:var(--font-body);font-size:14px;line-height:1.45;max-width:420px;min-width:0;border:1px solid var(--border-dark);animation:nigdn-toast-in var(--dur-slow) var(--ease-out)}
.nigdn-toast__icon{flex:none;margin-top:1px}.nigdn-toast__title{font-weight:700;display:block}.nigdn-toast__desc{color:var(--ink-300);display:block}.nigdn-toast__close{all:unset;cursor:pointer;margin-left:auto;color:var(--ink-400);display:grid;place-items:center;width:24px;height:24px;border-radius:6px}.nigdn-toast__close:hover{background:rgba(255,255,255,.08);color:#fff}
.nigdn-toast--info .nigdn-toast__icon{color:var(--sky-500)}.nigdn-toast--success .nigdn-toast__icon{color:var(--teal-500)}.nigdn-toast--danger .nigdn-toast__icon{color:var(--rose-500)}.nigdn-toast--brand .nigdn-toast__icon{color:var(--purple-400)}
.nigdn-toaster{position:fixed;bottom:24px;right:24px;display:flex;flex-direction:column;gap:10px;z-index:1100}
@keyframes nigdn-toast-in{from{opacity:0;transform:translateY(8px)}}`;
  document.head.appendChild(s);
}
const icons = {
  info: 'info',
  success: 'check-circle-2',
  danger: 'alert-circle',
  brand: 'gamepad-2'
};
function Toast({
  tone = 'info',
  title,
  description,
  onClose,
  action,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    className: `nigdn-toast nigdn-toast--${tone} ${className}`
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "nigdn-toast__icon",
    name: icons[tone],
    size: 20
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "nigdn-toast__title"
  }, title), description && /*#__PURE__*/React.createElement("span", {
    className: "nigdn-toast__desc"
  }, description), action), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nigdn-toast__close",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
function Toaster({
  toasts = [],
  onDismiss
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "nigdn-toaster"
  }, toasts.map(t => /*#__PURE__*/React.createElement(Toast, _extends({
    key: t.id
  }, t, {
    onClose: () => onDismiss && onDismiss(t.id)
  }))));
}
Object.assign(__ds_scope, { Toast, Toaster });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
const __sid = 'nigdn-tooltip';
if (typeof document !== 'undefined' && !document.getElementById(__sid)) {
  const s = document.createElement('style');
  s.id = __sid;
  s.textContent = `.nigdn-tt{position:relative;display:inline-flex}.nigdn-tt__bubble{position:absolute;left:50%;transform:translateX(-50%) translateY(4px);background:var(--ink-950);color:#fff;font-family:var(--font-body);font-size:12px;font-weight:500;line-height:1.3;padding:6px 10px;border-radius:var(--radius-sm);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity var(--dur-fast),transform var(--dur-fast) var(--ease-out);z-index:10;box-shadow:var(--shadow-md)}
.nigdn-tt--top .nigdn-tt__bubble{bottom:calc(100% + 8px)}.nigdn-tt--bottom .nigdn-tt__bubble{top:calc(100% + 8px);transform:translateX(-50%) translateY(-4px)}.nigdn-tt--open .nigdn-tt__bubble{opacity:1;transform:translateX(-50%) translateY(0)}`;
  document.head.appendChild(s);
}
function Tooltip({
  content,
  side = 'top',
  open,
  children
}) {
  const [h, setH] = useState(false);
  const show = open ?? h;
  return /*#__PURE__*/React.createElement("span", {
    className: `nigdn-tt nigdn-tt--${side} ${show ? 'nigdn-tt--open' : ''}`,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    onFocus: () => setH(true),
    onBlur: () => setH(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    className: "nigdn-tt__bubble"
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __sid = 'nigdn-check';
if (typeof document !== 'undefined' && !document.getElementById(__sid)) {
  const s = document.createElement('style');
  s.id = __sid;
  s.textContent = `.nigdn-check{display:inline-flex;align-items:center;gap:10px;font-family:var(--font-body);font-size:15px;color:var(--text-body);cursor:pointer;user-select:none}.nigdn-check input{position:absolute;opacity:0;width:0;height:0}.nigdn-check--disabled{opacity:.45;cursor:not-allowed}
.nigdn-check__box{width:20px;height:20px;flex:none;border-radius:6px;border:1.5px solid var(--border-strong);background:#fff;display:grid;place-items:center;transition:background var(--dur-fast),border-color var(--dur-fast),box-shadow var(--dur-fast);color:#fff}.nigdn-check--radio .nigdn-check__box{border-radius:50%}
.nigdn-check:hover .nigdn-check__box{border-color:var(--purple-400)}.nigdn-check input:focus-visible+.nigdn-check__box{box-shadow:var(--focus-ring)}
.nigdn-check input:checked+.nigdn-check__box{background:var(--brand);border-color:var(--brand)}.nigdn-check--radio input:checked+.nigdn-check__box{background:#fff;border-width:6px}
.nigdn-check__box svg{opacity:0;transform:scale(.6);transition:all var(--dur-fast)}.nigdn-check input:checked+.nigdn-check__box svg{opacity:1;transform:scale(1)}`;
  document.head.appendChild(s);
}
function Checkbox({
  label,
  disabled,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `nigdn-check ${disabled ? 'nigdn-check--disabled' : ''} ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "nigdn-check__box"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    strokeWidth: 3
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __sid = 'nigdn-field';
if (typeof document !== 'undefined' && !document.getElementById(__sid)) {
  const s = document.createElement('style');
  s.id = __sid;
  s.textContent = `.nigdn-field{display:flex;flex-direction:column;gap:6px;font-family:var(--font-body)}.nigdn-field__label{font-size:13px;font-weight:600;color:var(--text-heading)}.nigdn-field__hint{font-size:12px;color:var(--text-muted)}.nigdn-field--error .nigdn-field__hint{color:var(--status-danger)}
.nigdn-control{height:var(--control-h-md);width:100%;box-sizing:border-box;padding:0 14px;border-radius:var(--radius-md);border:1px solid var(--border-default);background:var(--surface-card);font:inherit;font-size:15px;color:var(--text-body);transition:border-color var(--dur-base),box-shadow var(--dur-base);outline:none}.nigdn-control::placeholder{color:var(--ink-400)}.nigdn-control:hover{border-color:var(--border-strong)}.nigdn-control:focus{border-color:var(--border-focus);box-shadow:var(--focus-ring)}.nigdn-control:disabled{background:var(--ink-50);color:var(--ink-400);cursor:not-allowed}.nigdn-field--error .nigdn-control{border-color:var(--status-danger)}
.nigdn-control--sm{height:var(--control-h-sm);font-size:14px;padding:0 12px;border-radius:var(--radius-sm)}
.nigdn-inputwrap{position:relative;display:flex;align-items:center}.nigdn-inputwrap svg{position:absolute;left:12px;color:var(--ink-400);pointer-events:none}.nigdn-inputwrap--icon .nigdn-control{padding-left:38px}`;
  document.head.appendChild(s);
}
function Field({
  label,
  hint,
  error,
  htmlFor,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `nigdn-field ${error ? 'nigdn-field--error' : ''}`,
    htmlFor: htmlFor
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "nigdn-field__label"
  }, label), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: "nigdn-field__hint"
  }, error || hint));
}
function Input({
  label,
  hint,
  error,
  icon,
  size = 'md',
  multiline,
  className = '',
  ...rest
}) {
  const ctl = multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    className: `nigdn-control ${className}`,
    style: {
      height: 'auto',
      minHeight: 96,
      padding: 12,
      resize: 'vertical'
    }
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    className: `nigdn-control nigdn-control--${size} ${className}`
  }, rest));
  const wrapped = /*#__PURE__*/React.createElement("div", {
    className: `nigdn-inputwrap ${icon ? 'nigdn-inputwrap--icon' : ''}`
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), ctl);
  return label || hint || error ? /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error
  }, wrapped) : wrapped;
}
Object.assign(__ds_scope, { Field, Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __sid = 'nigdn-check';
if (typeof document !== 'undefined' && !document.getElementById(__sid)) {
  const s = document.createElement('style');
  s.id = __sid;
  s.textContent = `.nigdn-check{display:inline-flex;align-items:center;gap:10px;font-family:var(--font-body);font-size:15px;color:var(--text-body);cursor:pointer;user-select:none}.nigdn-check input{position:absolute;opacity:0;width:0;height:0}.nigdn-check--disabled{opacity:.45;cursor:not-allowed}
.nigdn-check__box{width:20px;height:20px;flex:none;border-radius:6px;border:1.5px solid var(--border-strong);background:#fff;display:grid;place-items:center;transition:background var(--dur-fast),border-color var(--dur-fast),box-shadow var(--dur-fast);color:#fff}.nigdn-check--radio .nigdn-check__box{border-radius:50%}
.nigdn-check:hover .nigdn-check__box{border-color:var(--purple-400)}.nigdn-check input:focus-visible+.nigdn-check__box{box-shadow:var(--focus-ring)}
.nigdn-check input:checked+.nigdn-check__box{background:var(--brand);border-color:var(--brand)}.nigdn-check--radio input:checked+.nigdn-check__box{background:#fff;border-width:6px}
.nigdn-check__box svg{opacity:0;transform:scale(.6);transition:all var(--dur-fast)}.nigdn-check input:checked+.nigdn-check__box svg{opacity:1;transform:scale(1)}`;
  document.head.appendChild(s);
}
function Radio({
  label,
  disabled,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `nigdn-check nigdn-check--radio ${disabled ? 'nigdn-check--disabled' : ''} ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "nigdn-check__box"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
function RadioGroup({
  name,
  options,
  value,
  onChange,
  direction = 'column'
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 20 : 10
    }
  }, options.map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o.value,
    name: name,
    value: o.value,
    label: o.label,
    checked: value === o.value,
    onChange: () => onChange && onChange(o.value)
  })));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __sid = 'nigdn-select';
if (typeof document !== 'undefined' && !document.getElementById(__sid)) {
  const s = document.createElement('style');
  s.id = __sid;
  s.textContent = `.nigdn-selectwrap{position:relative;display:flex;align-items:center}.nigdn-selectwrap select{appearance:none;padding-right:38px;cursor:pointer}.nigdn-selectwrap svg{position:absolute;right:12px;color:var(--ink-500);pointer-events:none}`;
  document.head.appendChild(s);
}
function Select({
  label,
  hint,
  error,
  options = [],
  placeholder,
  size = 'md',
  className = '',
  ...rest
}) {
  const ctl = /*#__PURE__*/React.createElement("div", {
    className: "nigdn-selectwrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: `nigdn-control nigdn-control--${size} ${className}`
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  }));
  return label || hint || error ? /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error
  }, ctl) : ctl;
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const __sid = 'nigdn-switch';
if (typeof document !== 'undefined' && !document.getElementById(__sid)) {
  const s = document.createElement('style');
  s.id = __sid;
  s.textContent = `.nigdn-switch{display:inline-flex;align-items:center;gap:10px;font-family:var(--font-body);font-size:15px;color:var(--text-body);cursor:pointer;user-select:none}.nigdn-switch input{position:absolute;opacity:0;width:0;height:0}.nigdn-switch--disabled{opacity:.45;cursor:not-allowed}
.nigdn-switch__track{width:40px;height:24px;border-radius:999px;background:var(--ink-300);position:relative;transition:background var(--dur-base) var(--ease-out);flex:none}.nigdn-switch__track:after{content:"";position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.2);transition:transform var(--dur-base) var(--ease-out)}
.nigdn-switch input:checked+.nigdn-switch__track{background:var(--brand)}.nigdn-switch input:checked+.nigdn-switch__track:after{transform:translateX(16px)}.nigdn-switch input:focus-visible+.nigdn-switch__track{box-shadow:var(--focus-ring)}`;
  document.head.appendChild(s);
}
function Switch({
  label,
  disabled,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `nigdn-switch ${disabled ? 'nigdn-switch--disabled' : ''} ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "nigdn-switch__track"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const {
  useState
} = React;
const __sid = 'nigdn-tabs';
if (typeof document !== 'undefined' && !document.getElementById(__sid)) {
  const s = document.createElement('style');
  s.id = __sid;
  s.textContent = `.nigdn-tabs{display:flex;gap:4px;font-family:var(--font-body)}.nigdn-tabs--underline{border-bottom:1px solid var(--border-default);gap:20px}.nigdn-tabs--pill{background:var(--ink-100);padding:4px;border-radius:var(--radius-pill);display:inline-flex}
.nigdn-tab{all:unset;cursor:pointer;white-space:nowrap;font-size:14px;font-weight:600;color:var(--text-muted);display:inline-flex;align-items:center;gap:6px;transition:color var(--dur-base),background var(--dur-base)}
.nigdn-tabs--underline .nigdn-tab{padding:10px 2px;border-bottom:2px solid transparent;margin-bottom:-1px}.nigdn-tabs--underline .nigdn-tab:hover{color:var(--text-heading)}.nigdn-tabs--underline .nigdn-tab[aria-selected=true]{color:var(--brand);border-color:var(--brand)}
.nigdn-tabs--pill .nigdn-tab{padding:7px 14px;border-radius:var(--radius-pill)}.nigdn-tabs--pill .nigdn-tab:hover{color:var(--text-heading)}.nigdn-tabs--pill .nigdn-tab[aria-selected=true]{background:#fff;color:var(--text-heading);box-shadow:var(--shadow-sm)}
.nigdn-tab:focus-visible{box-shadow:var(--focus-ring);border-radius:6px}.nigdn-tab__count{font-size:11px;font-weight:700;background:var(--ink-100);color:var(--ink-600);border-radius:999px;padding:1px 6px}.nigdn-tab[aria-selected=true] .nigdn-tab__count{background:var(--brand-soft);color:var(--purple-800)}`;
  document.head.appendChild(s);
}
function Tabs({
  items,
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  className = ''
}) {
  const [inner, setInner] = useState(defaultValue ?? (items[0] && items[0].value));
  const cur = value ?? inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    className: `nigdn-tabs nigdn-tabs--${variant} ${className}`
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "tab",
    type: "button",
    "aria-selected": cur === it.value,
    className: "nigdn-tab",
    onClick: () => {
      setInner(it.value);
      onChange && onChange(it.value);
    }
  }, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
    className: "nigdn-tab__count"
  }, it.count))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
const {
  Toaster
} = window.NIGameDevNetworkDesignSystem_63115f;
function Placeholder({
  name
}) {
  return /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: 64
    }
  }, /*#__PURE__*/React.createElement(H1, {
    style: {
      fontSize: 44,
      color: 'var(--text-heading)'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      color: 'var(--text-muted)',
      fontSize: 16
    }
  }, "Not recreated in this kit: the live page for ", name, " was not read. Left intentionally blank."));
}
function App() {
  const [route, setRoute] = React.useState('home');
  const [game, setGame] = React.useState(null);
  const [toasts, setToasts] = React.useState([]);
  const go = (r, g) => {
    setRoute(r);
    if (g) setGame(g);
    window.scrollTo(0, 0);
  };
  const toast = t => {
    const id = Date.now();
    setToasts(ts => [...ts, {
      ...t,
      id
    }]);
    setTimeout(() => setToasts(ts => ts.filter(x => x.id !== id)), 4000);
  };
  const dark = route === 'home';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    route: route,
    go: go,
    dark: dark
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, route === 'home' && /*#__PURE__*/React.createElement(Home, {
    go: go
  }), route === 'games' && /*#__PURE__*/React.createElement(Games, {
    go: go,
    toast: toast
  }), route === 'game' && game && /*#__PURE__*/React.createElement(GameDetail, {
    game: game,
    go: go
  }), route === 'jobs' && /*#__PURE__*/React.createElement(Jobs, {
    toast: toast
  }), route === 'events' && /*#__PURE__*/React.createElement(PlayMyDemo, {
    toast: toast
  }), (route === 'studios' || route === 'freelancers' || route === 'store') && /*#__PURE__*/React.createElement(Placeholder, {
    name: route[0].toUpperCase() + route.slice(1)
  })), /*#__PURE__*/React.createElement(Footer, {
    go: go
  }), /*#__PURE__*/React.createElement(Toaster, {
    toasts: toasts,
    onDismiss: id => setToasts(ts => ts.filter(x => x.id !== id))
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GameDetail.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Tag,
  PlatformTag,
  Icon
} = window.NIGameDevNetworkDesignSystem_63115f;
function GameDetail({
  game: g,
  go
}) {
  const D = window.NIGDN_DATA;
  const more = D.games.filter(x => x.studio === g.studio && x.slug !== g.slug).concat(D.games.filter(x => x.slug !== g.slug)).slice(0, 3);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 420,
      overflow: 'hidden',
      background: 'var(--surface-dark)'
    }
  }, /*#__PURE__*/React.createElement(Art, {
    g: g,
    style: {
      fontSize: 32,
      fontFamily: 'var(--font-display)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-protect)'
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 40,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('games');
    },
    style: {
      color: 'var(--ink-300)',
      fontSize: 14,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      textDecoration: 'none',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 14
  }), "Games Showcase"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    status: g.status === 'dev' ? 'dev' : 'released',
    dot: true
  }, g.status === 'dev' ? 'In development' : 'Released'), /*#__PURE__*/React.createElement(H1, {
    style: {
      fontSize: 44,
      marginTop: 12
    }
  }, g.title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 16,
      color: 'var(--ink-200)'
    }
  }, "\uD83D\uDD79\uFE0F ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('studios');
    },
    style: {
      color: '#fff'
    }
  }, g.studio), g.date && /*#__PURE__*/React.createElement("span", null, " \xB7 ", g.date))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    glow: true,
    icon: "external-link"
  }, "Store page"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      color: '#fff'
    },
    icon: "share-2"
  }, "Share"))))), /*#__PURE__*/React.createElement(Container, {
    style: {
      marginTop: 48,
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      margin: 0,
      color: 'var(--text-heading)'
    }
  }, "About"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      marginTop: 12
    }
  }, g.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 12,
      marginTop: 28
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      aspectRatio: '16/9',
      borderRadius: 10,
      background: 'var(--ink-100)',
      display: 'grid',
      placeItems: 'center',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "screenshot ", i + 1)))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    title: "Platforms",
    footer: g.platforms.map(p => /*#__PURE__*/React.createElement(PlatformTag, {
      key: p,
      platform: p
    }))
  }), /*#__PURE__*/React.createElement(Card, {
    variant: "flat",
    title: "Studio",
    meta: g.studio,
    footer: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      iconRight: "arrow-right",
      onClick: () => go('studios')
    }, "Studio profile")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontStyle: 'italic',
      color: 'var(--text-muted)'
    }
  }, "See something wrong, or want your data changed/removed? Email web@nigame.dev"))), /*#__PURE__*/React.createElement(Container, {
    style: {
      marginTop: 72
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "More from NI"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20,
      marginTop: 16
    }
  }, more.map(x => /*#__PURE__*/React.createElement(Card, {
    key: x.slug,
    interactive: true,
    onClick: () => go('game', x),
    media: /*#__PURE__*/React.createElement(Art, {
      g: x
    }),
    title: x.title,
    meta: x.studio,
    footer: x.platforms.slice(0, 3).map(p => /*#__PURE__*/React.createElement(PlatformTag, {
      key: p,
      platform: p
    }))
  })))));
}
window.GameDetail = GameDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GameDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Games.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Tag,
  PlatformTag,
  Tabs,
  Input,
  Select,
  Dialog,
  Icon
} = window.NIGameDevNetworkDesignSystem_63115f;
function Games({
  go,
  toast
}) {
  const D = window.NIGDN_DATA;
  const [tab, setTab] = React.useState('released');
  const [q, setQ] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const list = D.games.filter(g => g.status === tab && g.title.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      lineHeight: 1
    }
  }, "\uD83C\uDFAE"), /*#__PURE__*/React.createElement(H1, {
    style: {
      fontSize: 44,
      marginTop: 16,
      color: 'var(--text-heading)'
    }
  }, "Games Showcase"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.55,
      maxWidth: 760,
      margin: '20px 0 0'
    }
  }, "While the games industry in Northern Ireland is still relatively new, local teams have released a wide range of games over the years, with many more still in development."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      maxWidth: 760,
      margin: '12px 0 0',
      color: 'var(--text-muted)'
    }
  }, "Notice a game that\u2019s missing? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setOpen(true);
    }
  }, "Fill out the details here"), " to add a listing!"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      marginTop: 40,
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: 'released',
      label: 'Released',
      count: D.games.filter(g => g.status === 'released').length
    }, {
      value: 'dev',
      label: 'In Development',
      count: D.games.filter(g => g.status === 'dev').length
    }],
    className: "nigdn-notab",
    style: {
      borderBottom: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 240
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    icon: "search",
    placeholder: "Search games",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 170
    }
  }, /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    options: ['All platforms', 'Windows', 'Mac', 'Linux', 'PS5', 'Xbox Series S|X', 'Nintendo Switch', 'iOS', 'Android']
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20,
      marginTop: 28
    }
  }, list.map(g => /*#__PURE__*/React.createElement(Card, {
    key: g.slug,
    interactive: true,
    onClick: () => go('game', g),
    media: /*#__PURE__*/React.createElement(Art, {
      g: g
    }),
    title: g.title,
    meta: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--brand)',
        fontWeight: 600
      }
    }, "\uD83D\uDD79\uFE0F ", g.studio), g.date && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4
      }
    }, g.date)),
    footer: g.platforms.map(p => /*#__PURE__*/React.createElement(PlatformTag, {
      key: p,
      platform: p
    }))
  }))), list.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 0',
      textAlign: 'center',
      color: 'var(--text-muted)'
    }
  }, "No games match \u201C", q, "\u201D.")), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: () => setOpen(false),
    title: "Submit a game",
    description: "Anyone can add a missing game made in Northern Ireland. We'll review it before it appears.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setOpen(false);
        toast({
          tone: 'success',
          title: 'Game submitted',
          description: "We'll review it and add it to the showcase."
        });
      }
    }, "Submit"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Game title",
    placeholder: "e.g. Amber Isle"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Studio",
    placeholder: "Who made it?"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Status",
    options: ['Released', 'In development']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Store or website link",
    placeholder: "https://"
  }))));
}
window.Games = Games;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Games.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Tag,
  PlatformTag,
  Icon
} = window.NIGameDevNetworkDesignSystem_63115f;
function Home({
  go
}) {
  const D = window.NIGDN_DATA;
  const feat = D.games.filter(g => g.status === 'released').slice(0, 4);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--gradient-banner)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'var(--halftone-pattern)',
      backgroundSize: 'var(--halftone-size)',
      maskImage: 'radial-gradient(ellipse at 30% 50%,transparent 20%,black 90%)'
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: 'relative',
      padding: '96px var(--gutter) 88px',
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-brand)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-brand)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--brand-label)'
    }
  }, "Whether you're a seasoned veteran or just getting started, welcome home."), /*#__PURE__*/React.createElement(H1, {
    style: {
      fontSize: 44,
      marginTop: 16
    }
  }, "The community for everyone making games in Northern Ireland."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      color: 'var(--ink-300)',
      margin: '22px 0 32px',
      maxWidth: 560
    }
  }, "Studio heads, students just starting out, players, journalists, and anyone else involved in games at any level. Come to a meetup, join a jam, or find your next job."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse",
    glow: true,
    icon: "message-circle"
  }, "Join the Discord"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    style: {
      color: '#fff'
    },
    iconRight: "arrow-right",
    onClick: () => go('events')
  }, "Upcoming events"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, ['pmd-16', 'pmd-10', 'pmd-11', 'pmd-17'].map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      aspectRatio: '16/10',
      borderRadius: 14,
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,.1)',
      transform: i % 2 ? 'translateY(24px)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: '../../assets/photos/' + n + '.jpg',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })))))), /*#__PURE__*/React.createElement(Container, {
    style: {
      marginTop: -28,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, [['calendar', 'Events', 'PlayMyDemo meetups, jams and the NI Game Awards', 'events'], ['building-2', 'Studios', 'Company directory for NI games businesses', 'studios'], ['gamepad-2', 'Games', 'Released and in-development titles made here', 'games'], ['briefcase', 'Jobs', 'A round-up of local games jobs', 'jobs']].map(([i, t, d, r]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    interactive: true,
    onClick: () => go(r),
    title: t,
    meta: d
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 22,
    color: "var(--brand)",
    style: {
      order: -1,
      marginBottom: 6
    }
  }))))), /*#__PURE__*/React.createElement(Container, {
    style: {
      marginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Next up"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 400,
      margin: '10px 0 0',
      color: 'var(--text-heading)'
    }
  }, "Events")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-right",
    onClick: () => go('events')
  }, "All events")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, D.events.map(e => /*#__PURE__*/React.createElement(Card, {
    key: e.name,
    interactive: true,
    onClick: () => go('events'),
    title: e.name,
    meta: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 14
    }), e.venue),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, e.free && /*#__PURE__*/React.createElement(Badge, {
      status: "new"
    }, "Free"), /*#__PURE__*/React.createElement(Tag, null, e.date, " \xB7 ", e.time))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      order: -1,
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      color: 'var(--brand)',
      marginBottom: 4
    }
  }, e.date.toUpperCase()))))), /*#__PURE__*/React.createElement(Container, {
    style: {
      marginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Made in NI"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 400,
      margin: '10px 0 0',
      color: 'var(--text-heading)'
    }
  }, "Games Showcase")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-right",
    onClick: () => go('games')
  }, "View all games")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, feat.map(g => /*#__PURE__*/React.createElement(Card, {
    key: g.slug,
    interactive: true,
    onClick: () => go('game', g),
    media: /*#__PURE__*/React.createElement(Art, {
      g: g
    }),
    title: g.title,
    meta: g.studio,
    footer: g.platforms.slice(0, 2).map(p => /*#__PURE__*/React.createElement(PlatformTag, {
      key: p,
      platform: p
    }))
  })))), /*#__PURE__*/React.createElement(Container, {
    style: {
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gradient-brand)',
      borderRadius: 20,
      padding: '48px 56px',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(H1, {
    style: {
      fontSize: 30
    }
  }, "Making a game in NI?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 17,
      color: 'var(--purple-100)',
      maxWidth: 520
    }
  }, "Notice a game that\u2019s missing from the showcase? Anyone can submit a listing.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse",
    icon: "plus",
    onClick: () => go('games')
  }, "Submit a game"))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Jobs.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Tag,
  Tabs,
  Input,
  Select,
  Checkbox,
  Switch,
  Icon
} = window.NIGameDevNetworkDesignSystem_63115f;
function Jobs({
  toast
}) {
  const D = window.NIGDN_DATA;
  const [remote, setRemote] = React.useState(false);
  const [saved, setSaved] = React.useState({});
  const list = D.jobs.filter(j => !remote || j.mode !== 'On-site');
  return /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      lineHeight: 1
    }
  }, "\uD83D\uDCBC"), /*#__PURE__*/React.createElement(H1, {
    style: {
      fontSize: 44,
      marginTop: 16,
      color: 'var(--text-heading)'
    }
  }, "Jobs"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.55,
      maxWidth: 760,
      margin: '20px 0 0'
    }
  }, "A round-up of games jobs in Northern Ireland. Hiring? Post it in the Discord or email web@nigame.dev and we'll add it here."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '260px 1fr',
      gap: 40,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    icon: "search",
    placeholder: "Search roles"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Location",
    size: "sm",
    options: ['Anywhere', 'Belfast', 'Derry/Londonderry', 'Remote']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, "Type"), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Full-time",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Contract",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Internship"
  })), /*#__PURE__*/React.createElement(Switch, {
    label: "Remote-friendly only",
    checked: remote,
    onChange: e => setRemote(e.target.checked)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, list.length, " open roles"), /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    items: [{
      value: 'new',
      label: 'Newest'
    }, {
      value: 'studio',
      label: 'By studio'
    }]
  })), list.map(j => /*#__PURE__*/React.createElement(Card, {
    key: j.title,
    variant: "flat",
    interactive: true,
    style: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 10,
      background: 'var(--purple-100)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--brand)',
      fontWeight: 800,
      flex: 'none'
    }
  }, j.studio[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 16,
      color: 'var(--text-heading)'
    }
  }, j.title), j.fresh && /*#__PURE__*/React.createElement(Badge, {
    status: "new"
  }, "New")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 4,
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, j.studio), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 13
  }), j.location), /*#__PURE__*/React.createElement("span", null, j.posted))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "brand"
  }, j.type), /*#__PURE__*/React.createElement(Tag, null, j.mode)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: saved[j.title] ? 'primary' : 'ghost',
    icon: saved[j.title] ? 'bookmark-check' : 'bookmark',
    onClick: e => {
      e.stopPropagation();
      setSaved(s => ({
        ...s,
        [j.title]: !s[j.title]
      }));
      if (!saved[j.title]) toast({
        tone: 'brand',
        title: 'Saved',
        description: j.title + ' at ' + j.studio
      });
    }
  }, saved[j.title] ? 'Saved' : 'Save')))))));
}
window.Jobs = Jobs;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Jobs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PlayMyDemo.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Tag,
  Icon
} = window.NIGameDevNetworkDesignSystem_63115f;
function PlayMyDemo({
  toast
}) {
  const D = window.NIGDN_DATA;
  const ev = D.events.filter(e => e.name.startsWith('PlayMyDemo'));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 360,
      background: 'var(--ink-950)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/pmd-06.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'grayscale(1) contrast(1.25) brightness(.6)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--duotone-purple)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'var(--halftone-pattern)',
      backgroundSize: 'var(--halftone-size)',
      maskImage: 'radial-gradient(ellipse at center,transparent 25%,black 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-protect)'
    }
  })), /*#__PURE__*/React.createElement(Container, {
    narrow: true,
    style: {
      marginTop: -72,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 144,
      height: 144,
      borderRadius: 20,
      boxShadow: 'var(--shadow-lg)',
      border: '4px solid #fff',
      background: 'var(--gradient-banner)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/playmydemo-icon-white.svg",
    alt: "PlayMyDemo",
    style: {
      width: 96,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/playmydemo-logo-colour.svg",
    alt: "PlayMyDemo!",
    style: {
      height: 72,
      marginTop: 24,
      display: 'block',
      filter: 'drop-shadow(0 1px 0 rgba(14,10,26,.15))'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 400,
      color: 'var(--brand)',
      margin: '12px 0 0'
    }
  }, "Meet \u2022 Play \u2022 Learn"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      lineHeight: 1.35,
      color: 'var(--text-heading)',
      margin: '32px 0 0'
    }
  }, "PlayMyDemo is our regular meetup event for anyone interested in making games in Northern Ireland! \uD83D\uDD79\uFE0F"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      fontWeight: 600,
      marginTop: 16
    }
  }, "Whether you're into programming, game design, art, writing, sound, production, marketing, or any part of game development, PlayMyDemo is an opportunity to network with local game creatives and check out the latest games being developed in NI!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      marginTop: 16
    }
  }, "PlayMyDemo usually takes place every second month in The Marcus Ward in Belfast, but dates & venues are flexible, especially as we sometimes partner up with other events/organisations to host special editions!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      marginTop: 16
    }
  }, "PlayMyDemo is always free to attend, and everyone\u2019s welcome to bring along what they\u2019re working on. If you're interested in showing off your project, just register using the form on the event page, then feel free to bring down your laptop/PC/Switch/Nintendo 64! It'll all be very casual, so don't worry about anything being perfect - that's the whole point!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      fontWeight: 700,
      marginTop: 16,
      color: 'var(--text-heading)'
    }
  }, "Come for the games, stay for the connections, and leave with a pocket full of insights! \uD83C\uDFAE"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      fontStyle: 'italic',
      color: 'var(--text-muted)',
      marginTop: 16
    }
  }, "(Please note - unless specified otherwise, PlayMyDemo events are strictly over-18.)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 28,
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Supported By"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ni-screen-logo.png",
    alt: "Northern Ireland Screen",
    style: {
      height: 36,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginTop: 40
    }
  }, ev.map(e => /*#__PURE__*/React.createElement(Card, {
    key: e.name,
    title: e.name,
    meta: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 14
    }), e.venue),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Badge, {
      status: "new"
    }, "Free"), /*#__PURE__*/React.createElement(Tag, null, e.date, " \xB7 ", e.time), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      icon: "ticket",
      onClick: () => toast({
        tone: 'success',
        title: "You're in!",
        description: e.name + ' · ' + e.date
      })
    }, "Register"))
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 12,
      marginTop: 48
    }
  }, ['pmd-01', 'pmd-02', 'pmd-03', 'pmd-04', 'pmd-05', 'pmd-13'].map(n => /*#__PURE__*/React.createElement("img", {
    key: n,
    src: '../../assets/photos/' + n + '.jpg',
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '4/3',
      borderRadius: 10,
      objectFit: 'cover',
      display: 'block'
    }
  })))));
}
window.PlayMyDemo = PlayMyDemo;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PlayMyDemo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shell.jsx
try { (() => {
const DS = window.NIGameDevNetworkDesignSystem_63115f;
const {
  Button,
  IconButton,
  Icon
} = DS;
const D = window.NIGDN_DATA;
function Nav({
  route,
  go,
  dark
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      height: 'var(--nav-height)',
      background: dark ? 'rgba(14,10,26,.72)' : 'rgba(255,255,255,.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid ' + (dark ? 'rgba(255,255,255,.08)' : 'var(--border-default)')
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? '../../assets/nigdn-logo-white.svg' : '../../assets/nigdn-logo.svg',
    alt: "NI Game Dev Network",
    style: {
      height: 30
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 'auto'
    }
  }, D.nav.map(([l, r]) => /*#__PURE__*/React.createElement("a", {
    key: r,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(r);
    },
    style: {
      padding: '8px 12px',
      borderRadius: 8,
      fontSize: 15,
      fontWeight: 600,
      textDecoration: 'none',
      color: route === r ? 'var(--brand)' : dark ? 'var(--ink-200)' : 'var(--text-body)',
      background: route === r ? dark ? 'rgba(139,92,246,.15)' : 'var(--purple-50)' : 'transparent'
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: "message-circle",
    variant: dark ? 'inverse' : 'primary'
  }, "Discord")));
}
function Footer({
  go
}) {
  const soc = [['X', 'twitter'], ['Discord', 'message-circle'], ['Facebook', 'facebook'], ['YouTube', 'youtube']];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--ink-300)',
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px var(--gutter) 32px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/nigdn-logo-white.svg",
    alt: "NI Game Dev Network",
    style: {
      height: 32
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontSize: 14,
      lineHeight: 1.6,
      maxWidth: 340
    }
  }, "The community for everyone making games in Northern Ireland.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      color: 'var(--brand-label)',
      marginBottom: 14
    }
  }, "SITE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, [...D.nav, ['Store', 'store']].map(([l, r]) => /*#__PURE__*/React.createElement("a", {
    key: r,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(r);
    },
    style: {
      color: 'var(--ink-200)',
      textDecoration: 'none',
      fontSize: 14
    }
  }, l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      color: 'var(--brand-label)',
      marginBottom: 14
    }
  }, "COMMUNITY"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, soc.map(([l, i]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: 'var(--ink-200)',
      textDecoration: 'none',
      fontSize: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 16
  }), l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '18px var(--gutter)',
      fontSize: 12,
      fontStyle: 'italic',
      color: 'var(--ink-500)'
    }
  }, "See something wrong, or want your data changed/removed? Email web@nigame.dev")));
}
function Container({
  children,
  narrow,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: narrow ? 'var(--container-narrow)' : 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      ...style
    }
  }, children);
}
function Eyebrow({
  children,
  light
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      fontWeight: 400,
      color: light ? 'var(--brand-label)' : 'var(--brand)'
    }
  }, children);
}
function H1({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 1.1,
      margin: 0,
      color: 'inherit',
      ...style
    }
  }, children);
}
function Art({
  g,
  style
}) {
  const [err, setErr] = React.useState(!g.img);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: g.c,
      display: 'grid',
      placeItems: 'center',
      color: 'rgba(255,255,255,.75)',
      fontSize: 12,
      fontWeight: 600,
      ...style
    }
  }, err ? g.title : /*#__PURE__*/React.createElement("img", {
    src: g.img,
    alt: g.title,
    onError: () => setErr(true),
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }));
}
Object.assign(window, {
  Nav,
  Footer,
  Container,
  Eyebrow,
  H1,
  Art
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.NIGDN_DATA = {
  nav: [['Events', 'events'], ['Studios', 'studios'], ['Games', 'games'], ['Freelancers', 'freelancers'], ['Jobs', 'jobs']],
  games: [{
    slug: 'amber-isle',
    title: 'Amber Isle',
    studio: 'Ambertail Games',
    date: 'October 10, 2024',
    platforms: ['Windows', 'Nintendo Switch'],
    status: 'released',
    img: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/3ce67439-c331-4f32-8e7d-011e19123e83/AI_SteamPage-Background-1438x810/w=960,quality=80,fit=scale-down',
    c: '#5B21B6',
    blurb: 'A cosy shopkeeping sim where you craft and sell wares to a village of dinosaur-like Paleofolk.'
  }, {
    slug: 'parcel-corps',
    title: 'Parcel Corps',
    studio: 'Billygoat Entertainment',
    date: 'October 3, 2024',
    platforms: ['Windows', 'Linux', 'PS5', 'Xbox Series S|X'],
    status: 'released',
    img: '',
    c: '#2E9BE7',
    blurb: 'An arcade bike courier game set in the sun-soaked city of New Island.'
  }, {
    slug: 'paleo-pines',
    title: 'Paleo Pines',
    studio: 'Italic Pig',
    date: 'September 26, 2023',
    platforms: ['Windows'],
    status: 'released',
    img: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/9267586f-c577-42d0-ad73-3242f4ba797d/pp/w=960,quality=80,fit=scale-down',
    c: '#14A89A',
    blurb: 'Befriend dinosaurs and build a farm on a peaceful island.'
  }, {
    slug: 'stories-of-blossom',
    title: 'Stories of Blossom',
    studio: 'Soft Leaf Studios',
    date: 'August 16, 2023',
    platforms: ['Windows', 'Xbox One'],
    status: 'released',
    img: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/df31b583-9d40-4da5-92be-855414c3e208/StoriesOfBlossom_KeyArt_-_Conor_Bradley/w=960,quality=80,fit=scale-down',
    c: '#E0386D',
    blurb: 'A heartfelt, accessible point-and-click adventure.'
  }, {
    slug: 'the-pale-beyond',
    title: 'The Pale Beyond',
    studio: 'Bellular Studios',
    date: 'February 24, 2023',
    platforms: ['Windows', 'Mac'],
    status: 'released',
    img: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/9f992756-7bd2-4814-bd08-f78428a4e18d/tpb/w=960,quality=80,fit=scale-down',
    c: '#17122A',
    blurb: 'A narrative survival game about leading an expedition through the frozen unknown.'
  }, {
    slug: 'surviving-the-abyss',
    title: 'Surviving The Abyss',
    studio: 'Rocketflair Games',
    date: 'January 17, 2023',
    platforms: ['Windows'],
    status: 'released',
    img: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/a3171870-8686-4f7f-a1e7-cf3fe185852e/capsule_616x353_-_James_Brown/w=960,quality=80,fit=scale-down',
    c: '#1466A3',
    blurb: 'Build a research base at the bottom of the ocean.'
  }, {
    slug: 'inertial-drift',
    title: 'Inertial Drift',
    studio: 'Level 91 Entertainment',
    date: 'September 11, 2020',
    platforms: ['Windows', 'Xbox One', 'PS4', 'Nintendo Switch'],
    status: 'released',
    img: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/0d835d21-6d04-468a-8f63-d921af2f9ddf/KeyArtForCropping2/w=960,quality=80,fit=scale-down',
    c: '#8B5CF6',
    blurb: 'A 1990s retro-future arcade racer with a unique twin-stick drift system.'
  }, {
    slug: 'buildings-have-feelings-too',
    title: 'Buildings Have Feelings Too!',
    studio: 'Blackstaff Games',
    date: 'April 22, 2021',
    platforms: ['Windows', 'Xbox One', 'PS4', 'Nintendo Switch'],
    status: 'released',
    img: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5f69ba14-f609-4af8-bce9-a3bac78fbfdf/buildings/w=960,quality=80,fit=scale-down',
    c: '#E6B422',
    blurb: 'A city management game where the buildings have thoughts and feelings of their own.'
  }, {
    slug: 'before-the-blood',
    title: 'Before the Blood',
    studio: 'Rewind Play Games',
    date: '',
    platforms: ['Windows'],
    status: 'dev',
    img: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/518247c8-e978-4bb2-9207-01171ab1cf72/btb/w=960,quality=80,fit=scale-down',
    c: '#43148A',
    blurb: 'In development.'
  }, {
    slug: 'hytale',
    title: 'Hytale',
    studio: 'Hypixel Studios',
    date: '',
    platforms: ['Windows'],
    status: 'dev',
    img: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/5a062706-fc4e-4190-a354-bd25495a13b5/hytale/w=960,quality=80,fit=scale-down',
    c: '#2A0B5C',
    blurb: 'In development.'
  }, {
    slug: 'hortalius',
    title: 'Hortalius',
    studio: 'Brain & Nerd',
    date: '',
    platforms: ['Windows'],
    status: 'dev',
    img: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/c032f9f2-522d-4f6d-ba1b-942643484c4c/hortalius/w=960,quality=80,fit=scale-down',
    c: '#0B6F66',
    blurb: 'In development.'
  }, {
    slug: 'dynasty-of-the-sands',
    title: 'Dynasty of the Sands',
    studio: 'Rocketflair Games',
    date: '',
    platforms: ['Windows'],
    status: 'dev',
    img: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/0d55e473-6008-40c2-b5f8-50b70a994e5b/dyn/w=960,quality=80,fit=scale-down',
    c: '#7A5A00',
    blurb: 'In development.'
  }],
  jobs: [{
    title: 'Senior Unity Developer',
    studio: 'Hypixel Studios',
    location: 'Derry/Londonderry',
    type: 'Full-time',
    mode: 'Hybrid',
    posted: '2 days ago',
    fresh: true
  }, {
    title: 'Technical Artist',
    studio: 'Italic Pig',
    location: 'Belfast',
    type: 'Full-time',
    mode: 'On-site',
    posted: '5 days ago',
    fresh: true
  }, {
    title: 'Narrative Designer',
    studio: 'Bellular Studios',
    location: 'Remote (NI)',
    type: 'Contract',
    mode: 'Remote',
    posted: '1 week ago'
  }, {
    title: 'QA Tester (Junior)',
    studio: 'Billygoat Entertainment',
    location: 'Belfast',
    type: 'Full-time',
    mode: 'On-site',
    posted: '2 weeks ago'
  }, {
    title: 'Gameplay Programmer',
    studio: 'Rocketflair Games',
    location: 'Belfast',
    type: 'Full-time',
    mode: 'Hybrid',
    posted: '3 weeks ago'
  }],
  events: [{
    name: 'PlayMyDemo Belfast',
    date: 'Thu 14 Nov',
    time: '18:30',
    venue: 'The Marcus Ward, Belfast',
    free: true
  }, {
    name: 'PlayMyDemo Derry/Londonderry',
    date: 'Wed 27 Nov',
    time: '18:00',
    venue: 'Nerve Centre, Derry/Londonderry',
    free: true
  }, {
    name: 'NI Game Awards 2026',
    date: 'Fri 12 Dec',
    time: '19:00',
    venue: 'Belfast',
    free: false
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.PlatformTag = __ds_scope.PlatformTag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Toaster = __ds_scope.Toaster;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
