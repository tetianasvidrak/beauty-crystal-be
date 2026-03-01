export const calculateVisitDuration = (visit) => {
  return visit.services.reduce((total, service) => {
    return total + (service.service.duration || 0);
  }, 0);
};
