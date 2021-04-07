const services = new Map();

export const Service = () => (target) => {
  services.set(target.name, new target());
};

export const useService = <T = any>(service: new () => T): T => {
  if (services.has(service.name)) {
    return services.get(service.name);
  } else {
    throw new Error(`${service.name} isn't a register service`);
  }
};
