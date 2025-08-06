export default function getLocalizedField(obj, base, lang) {
  return obj[`${base}_${lang}`] || obj[`${base}_en`] || "";
}
