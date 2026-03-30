// export const calculateVisitDuration = (visit) => {
//   return visit.services.reduce((total, service) => {
//     return total + (service.service.duration || 0);
//   }, 0);
// };

/////////// NEW ONE
export function calculateVisitDuration(visit) {
  if (!visit.services || !Array.isArray(visit.services)) return 0;

  return visit.services.reduce((sum, s) => {
    if (!s.service || !s.service.duration) return sum;
    return sum + s.service.duration;
  }, 0);
}