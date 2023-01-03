export default [
  {
    key: 'workloads',
    label: 'Workloads',
    children: [
      {key: 'pods', label: 'Pod', version: 'v1', group: 'core'},
      {key: 'replicationcontrollers', label: 'ReplicationController', version: 'v1', group: 'core'},
      {key: 'daemonsets', label: 'DaemonSet', version: 'v1', group: 'apps'},
      {key: 'deployments', label: 'Deployment', version: 'v1', group: 'apps'},
      {key: 'replicasets', label: 'ReplicaSet', version: 'v1', group: 'apps'},
      {key: 'statefulsets', label: 'StatefulSet', version: 'v1', group: 'apps'},
      {key: 'jobs', label: 'Job', version: 'v1', group: 'batch'},
      {key: 'cronjobs', label: 'CronJob', version: 'v1', group: 'batch'}
    ]
  },
  {
    key: 'service',
    label: 'Service',
    children: [
      {key: 'services', label: 'Service', version: 'v1', group: 'core'},
      {key: 'endpoints', label: 'Endpoint', version: 'v1', group: 'core'},
      {key: 'endpointslices', label: 'EndpointSlice', version: 'v1', group: 'discovery.k8s.io'},
      {key: 'ingresses', label: 'Ingress', version: 'v1', group: 'discovery.k8s.io'},
      {key: 'ingressclasses', label: 'IngressClass', version: 'v1', group: 'discovery.k8s.io'}
    ]
  },
]
