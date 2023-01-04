export default [
  {
    key: 'components',
    label: 'components',
    children: [
      { key: 'Form', label: 'Form' },
      { key: 'Table', label: 'Table' },
    ]
  },
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
  {
    key: 'config & storage',
    label: 'Config & Storage',
    children: [
      {key: 'configmaps', label: 'ConfigMap', version: 'v1', group: 'core'},
      {key: 'secrets', label: 'Secret', version: 'v1', group: 'core'},
      {key: 'persistentvolumeclaims', label: 'PVC', version: 'v1', group: 'core'},
      {key: 'volumes', label: 'Volume', version: 'v1', group: 'core'},
      {key: 'storageclasses', label: 'StorageClass', version: 'v1', group: 'storage.k8s.io'},
      {key: 'volumeattachments', label: 'VolumeAttachment', version: 'v1', group: 'storage.k8s.io'},
      {key: 'csidrivers', label: 'CSIDriver', version: 'v1', group: 'storage.k8s.io'},
      {key: 'csinodes', label: 'CSINode', version: 'v1', group: 'storage.k8s.io'},
      {key: 'csistoragecapacities', label: 'CSIStorageCapacity', version: 'v1beta1', group: 'storage.k8s.io'}
    ]
  },
]
