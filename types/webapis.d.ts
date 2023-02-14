declare interface WebAPI {
  id: string, // also used as slug.
  name: string,
  path?: string,
  url: string,
  source?: string,
  experimental?: boolean,
  userInteractionRequired?: boolean,
  permissionsRequired?: boolean,
  secureContextRequired?: boolean,
  availableInWebWorkers?: boolean,
  links?: {
    name: string,
    url: string,
  }[],
  check?: () => boolean | Promise<boolean>,
  value?: () => string,
  action?: {
    icon?: string,
    label: string,
    func: () => void | Promise<void>,
  },
  detail?: any,
}

declare interface WebAPIStatus {
  name: string,
  icon: string,
  label: string,
}