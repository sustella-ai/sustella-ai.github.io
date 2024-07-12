import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/de/blog/',
    component: ComponentCreator('/de/blog/', 'bfe'),
    exact: true
  },
  {
    path: '/de/blog/archive/',
    component: ComponentCreator('/de/blog/archive/', '3f2'),
    exact: true
  },
  {
    path: '/de/blog/chaos-mesh-qa-at-kubecon-eu-2022/',
    component: ComponentCreator('/de/blog/chaos-mesh-qa-at-kubecon-eu-2022/', '207'),
    exact: true
  },
  {
    path: '/de/blog/Sustella AI Founders/',
    component: ComponentCreator('/de/blog/Sustella AI Founders/', 'eea'),
    exact: true
  },
  {
    path: '/de/blog/tags/',
    component: ComponentCreator('/de/blog/tags/', 'e8a'),
    exact: true
  },
  {
    path: '/de/blog/tags/ai-agents/',
    component: ComponentCreator('/de/blog/tags/ai-agents/', 'd99'),
    exact: true
  },
  {
    path: '/de/blog/tags/ai/',
    component: ComponentCreator('/de/blog/tags/ai/', '386'),
    exact: true
  },
  {
    path: '/de/blog/tags/entrepreneurs/',
    component: ComponentCreator('/de/blog/tags/entrepreneurs/', 'b52'),
    exact: true
  },
  {
    path: '/de/blog/tags/esg/',
    component: ComponentCreator('/de/blog/tags/esg/', '8e6'),
    exact: true
  },
  {
    path: '/de/blog/tags/founders/',
    component: ComponentCreator('/de/blog/tags/founders/', '702'),
    exact: true
  },
  {
    path: '/de/blog/tags/porsche/',
    component: ComponentCreator('/de/blog/tags/porsche/', 'e9b'),
    exact: true
  },
  {
    path: '/de/blog/tags/sustella-ai/',
    component: ComponentCreator('/de/blog/tags/sustella-ai/', '9e5'),
    exact: true
  },
  {
    path: '/de/blog/tags/sustella/',
    component: ComponentCreator('/de/blog/tags/sustella/', '37d'),
    exact: true
  },
  {
    path: '/de/blog/tags/team/',
    component: ComponentCreator('/de/blog/tags/team/', '4c5'),
    exact: true
  },
  {
    path: '/de/search/',
    component: ComponentCreator('/de/search/', '624'),
    exact: true
  },
  {
    path: '/de/supported-releases/',
    component: ComponentCreator('/de/supported-releases/', '523'),
    exact: true
  },
  {
    path: '/de/versions/',
    component: ComponentCreator('/de/versions/', '8c6'),
    exact: true
  },
  {
    path: '/de/docs/',
    component: ComponentCreator('/de/docs/', '1b6'),
    routes: [
      {
        path: '/de/docs/2.4.3/',
        component: ComponentCreator('/de/docs/2.4.3/', 'af2'),
        routes: [
          {
            path: '/de/docs/2.4.3/',
            component: ComponentCreator('/de/docs/2.4.3/', '636'),
            routes: [
              {
                path: '/de/docs/2.4.3/',
                component: ComponentCreator('/de/docs/2.4.3/', 'b2c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/add-new-chaos-experiment-type/',
                component: ComponentCreator('/de/docs/2.4.3/add-new-chaos-experiment-type/', '74c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/basic-features/',
                component: ComponentCreator('/de/docs/2.4.3/basic-features/', '2c3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/chaos-engineering-principles/',
                component: ComponentCreator('/de/docs/2.4.3/chaos-engineering-principles/', '9de'),
                exact: true
              },
              {
                path: '/de/docs/2.4.3/chaosctl-tool/',
                component: ComponentCreator('/de/docs/2.4.3/chaosctl-tool/', '2e4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/chaosd-overview/',
                component: ComponentCreator('/de/docs/2.4.3/chaosd-overview/', '02a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/chaosd-search-recover/',
                component: ComponentCreator('/de/docs/2.4.3/chaosd-search-recover/', '378'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/check-workflow-status/',
                component: ComponentCreator('/de/docs/2.4.3/check-workflow-status/', '71b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/clean-up-chaos-experiments/',
                component: ComponentCreator('/de/docs/2.4.3/clean-up-chaos-experiments/', 'dc7'),
                exact: true
              },
              {
                path: '/de/docs/2.4.3/configure-development-environment/',
                component: ComponentCreator('/de/docs/2.4.3/configure-development-environment/', '339'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/configure-enabled-namespace/',
                component: ComponentCreator('/de/docs/2.4.3/configure-enabled-namespace/', '4cc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/create-chaos-mesh-workflow/',
                component: ComponentCreator('/de/docs/2.4.3/create-chaos-mesh-workflow/', '96a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/define-chaos-experiment-scope/',
                component: ComponentCreator('/de/docs/2.4.3/define-chaos-experiment-scope/', '1ce'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/define-scheduling-rules/',
                component: ComponentCreator('/de/docs/2.4.3/define-scheduling-rules/', 'b62'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/define-workflow-scheduling-rules/',
                component: ComponentCreator('/de/docs/2.4.3/define-workflow-scheduling-rules/', 'e2a'),
                exact: true
              },
              {
                path: '/de/docs/2.4.3/developer-guide-overview/',
                component: ComponentCreator('/de/docs/2.4.3/developer-guide-overview/', 'a2e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/extend-chaos-daemon-interface/',
                component: ComponentCreator('/de/docs/2.4.3/extend-chaos-daemon-interface/', '11c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/extend-chaosd/',
                component: ComponentCreator('/de/docs/2.4.3/extend-chaosd/', '72f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/faqs/',
                component: ComponentCreator('/de/docs/2.4.3/faqs/', '011'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/gcp-authentication/',
                component: ComponentCreator('/de/docs/2.4.3/gcp-authentication/', '3fc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/glossary/',
                component: ComponentCreator('/de/docs/2.4.3/glossary/', '3f7'),
                exact: true
              },
              {
                path: '/de/docs/2.4.3/go-client/',
                component: ComponentCreator('/de/docs/2.4.3/go-client/', 'cbd'),
                exact: true
              },
              {
                path: '/de/docs/2.4.3/inspect-chaos-experiments/',
                component: ComponentCreator('/de/docs/2.4.3/inspect-chaos-experiments/', '018'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/integrate-chaos-mesh-into-github-actions/',
                component: ComponentCreator('/de/docs/2.4.3/integrate-chaos-mesh-into-github-actions/', '87e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/java-client/',
                component: ComponentCreator('/de/docs/2.4.3/java-client/', '01b'),
                exact: true
              },
              {
                path: '/de/docs/2.4.3/manage-user-permissions/',
                component: ComponentCreator('/de/docs/2.4.3/manage-user-permissions/', 'c2f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/multi-data-center-scenario/',
                component: ComponentCreator('/de/docs/2.4.3/multi-data-center-scenario/', 'f4d'),
                exact: true
              },
              {
                path: '/de/docs/2.4.3/offline-installation/',
                component: ComponentCreator('/de/docs/2.4.3/offline-installation/', 'a91'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/persistence-dashboard/',
                component: ComponentCreator('/de/docs/2.4.3/persistence-dashboard/', '51c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/production-installation-using-helm/',
                component: ComponentCreator('/de/docs/2.4.3/production-installation-using-helm/', '53f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/python-client/',
                component: ComponentCreator('/de/docs/2.4.3/python-client/', '164'),
                exact: true
              },
              {
                path: '/de/docs/2.4.3/quick-start/',
                component: ComponentCreator('/de/docs/2.4.3/quick-start/', '3b2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/release-0.0.8/',
                component: ComponentCreator('/de/docs/2.4.3/release-0.0.8/', '9f8'),
                exact: true
              },
              {
                path: '/de/docs/2.4.3/release-0.0.9/',
                component: ComponentCreator('/de/docs/2.4.3/release-0.0.9/', '227'),
                exact: true
              },
              {
                path: '/de/docs/2.4.3/release-1.0.0/',
                component: ComponentCreator('/de/docs/2.4.3/release-1.0.0/', '4e4'),
                exact: true
              },
              {
                path: '/de/docs/2.4.3/release-2.0.0/',
                component: ComponentCreator('/de/docs/2.4.3/release-2.0.0/', 'c9b'),
                exact: true
              },
              {
                path: '/de/docs/2.4.3/release-2.4-tracking/',
                component: ComponentCreator('/de/docs/2.4.3/release-2.4-tracking/', '862'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/release-cycle/',
                component: ComponentCreator('/de/docs/2.4.3/release-cycle/', '4fd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/run-a-chaos-experiment/',
                component: ComponentCreator('/de/docs/2.4.3/run-a-chaos-experiment/', '2ca'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/run-serial-or-parallel-experiments/',
                component: ComponentCreator('/de/docs/2.4.3/run-serial-or-parallel-experiments/', 'c1e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/rust-client/',
                component: ComponentCreator('/de/docs/2.4.3/rust-client/', '583'),
                exact: true
              },
              {
                path: '/de/docs/2.4.3/send-http-request-on-workflow/',
                component: ComponentCreator('/de/docs/2.4.3/send-http-request-on-workflow/', 'a50'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-aws-chaos/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-aws-chaos/', '5ef'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-azure-chaos/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-azure-chaos/', 'd03'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-block-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-block-chaos-on-kubernetes/', 'bd5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-disk-pressure-in-physical-nodes/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-disk-pressure-in-physical-nodes/', '1d0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-dns-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-dns-chaos-on-kubernetes/', 'c9e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-file-chaos-in-physical-nodes/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-file-chaos-in-physical-nodes/', 'f06'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-gcp-chaos/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-gcp-chaos/', '443'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-heavy-stress-in-physical-nodes/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-heavy-stress-in-physical-nodes/', '246'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-heavy-stress-on-kubernetes/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-heavy-stress-on-kubernetes/', '6eb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-host-console-in-physical-nodes/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-host-console-in-physical-nodes/', '21e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-http-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-http-chaos-on-kubernetes/', 'f96'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-io-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-io-chaos-on-kubernetes/', '985'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-jvm-application-chaos-in-physical-nodes/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-jvm-application-chaos-in-physical-nodes/', '213'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-jvm-application-chaos/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-jvm-application-chaos/', '4ca'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-kernel-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-kernel-chaos-on-kubernetes/', 'c3d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-network-chaos-in-physical-nodes/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-network-chaos-in-physical-nodes/', '3c4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-network-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-network-chaos-on-kubernetes/', '9bb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-physical-machine-chaos/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-physical-machine-chaos/', '7b3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-pod-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-pod-chaos-on-kubernetes/', '6b0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-process-chaos-in-physical-nodes/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-process-chaos-in-physical-nodes/', 'd13'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-redis-chaos-on-physical-nodes/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-redis-chaos-on-physical-nodes/', '109'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-time-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-time-chaos-on-kubernetes/', '320'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/simulate-time-chaos-on-physical-nodes/',
                component: ComponentCreator('/de/docs/2.4.3/simulate-time-chaos-on-physical-nodes/', '75a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/status-check-in-workflow/',
                component: ComponentCreator('/de/docs/2.4.3/status-check-in-workflow/', '9a6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/troubleshooting-guide/',
                component: ComponentCreator('/de/docs/2.4.3/troubleshooting-guide/', 'e57'),
                exact: true
              },
              {
                path: '/de/docs/2.4.3/uninstallation/',
                component: ComponentCreator('/de/docs/2.4.3/uninstallation/', '159'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/upgrade-from-2.1-to-2.2/',
                component: ComponentCreator('/de/docs/2.4.3/upgrade-from-2.1-to-2.2/', 'b12'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/upgrade-to-2.0/',
                component: ComponentCreator('/de/docs/2.4.3/upgrade-to-2.0/', '2f6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.4.3/use-argo-to-orchestrate-chaos-experiments/',
                component: ComponentCreator('/de/docs/2.4.3/use-argo-to-orchestrate-chaos-experiments/', '3c5'),
                exact: true
              },
              {
                path: '/de/docs/2.4.3/use-grafana-data-source/',
                component: ComponentCreator('/de/docs/2.4.3/use-grafana-data-source/', '184'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      },
      {
        path: '/de/docs/2.5.2/',
        component: ComponentCreator('/de/docs/2.5.2/', 'e64'),
        routes: [
          {
            path: '/de/docs/2.5.2/',
            component: ComponentCreator('/de/docs/2.5.2/', 'f5b'),
            routes: [
              {
                path: '/de/docs/2.5.2/',
                component: ComponentCreator('/de/docs/2.5.2/', 'fb8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/add-new-chaos-experiment-type/',
                component: ComponentCreator('/de/docs/2.5.2/add-new-chaos-experiment-type/', '24b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/basic-features/',
                component: ComponentCreator('/de/docs/2.5.2/basic-features/', '812'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/chaos-engineering-principles/',
                component: ComponentCreator('/de/docs/2.5.2/chaos-engineering-principles/', 'cec'),
                exact: true
              },
              {
                path: '/de/docs/2.5.2/chaosctl-tool/',
                component: ComponentCreator('/de/docs/2.5.2/chaosctl-tool/', '764'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/chaosd-overview/',
                component: ComponentCreator('/de/docs/2.5.2/chaosd-overview/', 'e05'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/chaosd-search-recover/',
                component: ComponentCreator('/de/docs/2.5.2/chaosd-search-recover/', 'd89'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/check-workflow-status/',
                component: ComponentCreator('/de/docs/2.5.2/check-workflow-status/', 'daa'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/clean-up-chaos-experiments/',
                component: ComponentCreator('/de/docs/2.5.2/clean-up-chaos-experiments/', '766'),
                exact: true
              },
              {
                path: '/de/docs/2.5.2/configure-development-environment/',
                component: ComponentCreator('/de/docs/2.5.2/configure-development-environment/', 'd14'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/configure-enabled-namespace/',
                component: ComponentCreator('/de/docs/2.5.2/configure-enabled-namespace/', '9a9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/create-chaos-mesh-workflow/',
                component: ComponentCreator('/de/docs/2.5.2/create-chaos-mesh-workflow/', 'ff8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/define-chaos-experiment-scope/',
                component: ComponentCreator('/de/docs/2.5.2/define-chaos-experiment-scope/', '8f8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/define-scheduling-rules/',
                component: ComponentCreator('/de/docs/2.5.2/define-scheduling-rules/', '299'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/define-workflow-scheduling-rules/',
                component: ComponentCreator('/de/docs/2.5.2/define-workflow-scheduling-rules/', 'cf7'),
                exact: true
              },
              {
                path: '/de/docs/2.5.2/developer-guide-overview/',
                component: ComponentCreator('/de/docs/2.5.2/developer-guide-overview/', 'e35'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/extend-chaos-daemon-interface/',
                component: ComponentCreator('/de/docs/2.5.2/extend-chaos-daemon-interface/', '1ee'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/extend-chaosd/',
                component: ComponentCreator('/de/docs/2.5.2/extend-chaosd/', '6e8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/faqs/',
                component: ComponentCreator('/de/docs/2.5.2/faqs/', '777'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/gcp-authentication/',
                component: ComponentCreator('/de/docs/2.5.2/gcp-authentication/', '311'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/glossary/',
                component: ComponentCreator('/de/docs/2.5.2/glossary/', '5f3'),
                exact: true
              },
              {
                path: '/de/docs/2.5.2/go-client/',
                component: ComponentCreator('/de/docs/2.5.2/go-client/', '431'),
                exact: true
              },
              {
                path: '/de/docs/2.5.2/inspect-chaos-experiments/',
                component: ComponentCreator('/de/docs/2.5.2/inspect-chaos-experiments/', 'd66'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/integrate-chaos-mesh-into-github-actions/',
                component: ComponentCreator('/de/docs/2.5.2/integrate-chaos-mesh-into-github-actions/', '702'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/java-client/',
                component: ComponentCreator('/de/docs/2.5.2/java-client/', '958'),
                exact: true
              },
              {
                path: '/de/docs/2.5.2/manage-user-permissions/',
                component: ComponentCreator('/de/docs/2.5.2/manage-user-permissions/', '8ec'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/multi-data-center-scenario/',
                component: ComponentCreator('/de/docs/2.5.2/multi-data-center-scenario/', '8e1'),
                exact: true
              },
              {
                path: '/de/docs/2.5.2/offline-installation/',
                component: ComponentCreator('/de/docs/2.5.2/offline-installation/', '2d7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/persistence-dashboard/',
                component: ComponentCreator('/de/docs/2.5.2/persistence-dashboard/', '2e2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/production-installation-using-helm/',
                component: ComponentCreator('/de/docs/2.5.2/production-installation-using-helm/', '1e4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/python-client/',
                component: ComponentCreator('/de/docs/2.5.2/python-client/', 'c7d'),
                exact: true
              },
              {
                path: '/de/docs/2.5.2/quick-start/',
                component: ComponentCreator('/de/docs/2.5.2/quick-start/', '811'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/release-0.0.8/',
                component: ComponentCreator('/de/docs/2.5.2/release-0.0.8/', 'a63'),
                exact: true
              },
              {
                path: '/de/docs/2.5.2/release-0.0.9/',
                component: ComponentCreator('/de/docs/2.5.2/release-0.0.9/', '982'),
                exact: true
              },
              {
                path: '/de/docs/2.5.2/release-1.0.0/',
                component: ComponentCreator('/de/docs/2.5.2/release-1.0.0/', 'c26'),
                exact: true
              },
              {
                path: '/de/docs/2.5.2/release-2.0.0/',
                component: ComponentCreator('/de/docs/2.5.2/release-2.0.0/', 'e1e'),
                exact: true
              },
              {
                path: '/de/docs/2.5.2/release-2.5-tracking/',
                component: ComponentCreator('/de/docs/2.5.2/release-2.5-tracking/', '040'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/release-cycle/',
                component: ComponentCreator('/de/docs/2.5.2/release-cycle/', 'b6f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/remote-cluster-management/',
                component: ComponentCreator('/de/docs/2.5.2/remote-cluster-management/', 'e34'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/run-a-chaos-experiment/',
                component: ComponentCreator('/de/docs/2.5.2/run-a-chaos-experiment/', 'a16'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/run-serial-or-parallel-experiments/',
                component: ComponentCreator('/de/docs/2.5.2/run-serial-or-parallel-experiments/', 'f2d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/rust-client/',
                component: ComponentCreator('/de/docs/2.5.2/rust-client/', 'b52'),
                exact: true
              },
              {
                path: '/de/docs/2.5.2/send-http-request-on-workflow/',
                component: ComponentCreator('/de/docs/2.5.2/send-http-request-on-workflow/', '9d5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-aws-chaos/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-aws-chaos/', '13f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-azure-chaos/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-azure-chaos/', 'cb0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-block-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-block-chaos-on-kubernetes/', '992'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-disk-pressure-in-physical-nodes/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-disk-pressure-in-physical-nodes/', 'a22'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-dns-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-dns-chaos-on-kubernetes/', '682'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-file-chaos-in-physical-nodes/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-file-chaos-in-physical-nodes/', 'd05'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-gcp-chaos/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-gcp-chaos/', 'e7f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-heavy-stress-in-physical-nodes/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-heavy-stress-in-physical-nodes/', '79f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-heavy-stress-on-kubernetes/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-heavy-stress-on-kubernetes/', 'cae'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-host-console-in-physical-nodes/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-host-console-in-physical-nodes/', '2fc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-http-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-http-chaos-on-kubernetes/', 'b41'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-io-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-io-chaos-on-kubernetes/', '140'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-jvm-application-chaos-in-physical-nodes/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-jvm-application-chaos-in-physical-nodes/', 'f39'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-jvm-application-chaos/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-jvm-application-chaos/', '6db'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-kernel-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-kernel-chaos-on-kubernetes/', '792'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-network-chaos-in-physical-nodes/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-network-chaos-in-physical-nodes/', 'f64'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-network-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-network-chaos-on-kubernetes/', '26c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-physical-machine-chaos/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-physical-machine-chaos/', 'a41'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-pod-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-pod-chaos-on-kubernetes/', '7d1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-process-chaos-in-physical-nodes/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-process-chaos-in-physical-nodes/', '55c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-redis-chaos-on-physical-nodes/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-redis-chaos-on-physical-nodes/', '014'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-time-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-time-chaos-on-kubernetes/', '4b6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/simulate-time-chaos-on-physical-nodes/',
                component: ComponentCreator('/de/docs/2.5.2/simulate-time-chaos-on-physical-nodes/', '640'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/status-check-in-workflow/',
                component: ComponentCreator('/de/docs/2.5.2/status-check-in-workflow/', 'd41'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/troubleshooting-guide/',
                component: ComponentCreator('/de/docs/2.5.2/troubleshooting-guide/', '2ca'),
                exact: true
              },
              {
                path: '/de/docs/2.5.2/uninstallation/',
                component: ComponentCreator('/de/docs/2.5.2/uninstallation/', '7bb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/upgrade-from-2.1-to-2.2/',
                component: ComponentCreator('/de/docs/2.5.2/upgrade-from-2.1-to-2.2/', '90c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/upgrade-to-2.0/',
                component: ComponentCreator('/de/docs/2.5.2/upgrade-to-2.0/', '889'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/2.5.2/use-argo-to-orchestrate-chaos-experiments/',
                component: ComponentCreator('/de/docs/2.5.2/use-argo-to-orchestrate-chaos-experiments/', '893'),
                exact: true
              },
              {
                path: '/de/docs/2.5.2/use-grafana-data-source/',
                component: ComponentCreator('/de/docs/2.5.2/use-grafana-data-source/', '176'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      },
      {
        path: '/de/docs/next/',
        component: ComponentCreator('/de/docs/next/', '51d'),
        routes: [
          {
            path: '/de/docs/next/',
            component: ComponentCreator('/de/docs/next/', 'b9d'),
            routes: [
              {
                path: '/de/docs/next/',
                component: ComponentCreator('/de/docs/next/', '45d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/add-new-chaos-experiment-type/',
                component: ComponentCreator('/de/docs/next/add-new-chaos-experiment-type/', '7be'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/basic-features/',
                component: ComponentCreator('/de/docs/next/basic-features/', 'f00'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/chaos-engineering-principles/',
                component: ComponentCreator('/de/docs/next/chaos-engineering-principles/', '58e'),
                exact: true
              },
              {
                path: '/de/docs/next/chaosctl-tool/',
                component: ComponentCreator('/de/docs/next/chaosctl-tool/', '34a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/chaosd-overview/',
                component: ComponentCreator('/de/docs/next/chaosd-overview/', '739'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/chaosd-search-recover/',
                component: ComponentCreator('/de/docs/next/chaosd-search-recover/', '9cd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/check-workflow-status/',
                component: ComponentCreator('/de/docs/next/check-workflow-status/', 'b36'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/clean-up-chaos-experiments/',
                component: ComponentCreator('/de/docs/next/clean-up-chaos-experiments/', '5ea'),
                exact: true
              },
              {
                path: '/de/docs/next/configure-development-environment/',
                component: ComponentCreator('/de/docs/next/configure-development-environment/', '3ea'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/configure-enabled-namespace/',
                component: ComponentCreator('/de/docs/next/configure-enabled-namespace/', 'bd7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/create-chaos-mesh-workflow/',
                component: ComponentCreator('/de/docs/next/create-chaos-mesh-workflow/', 'b29'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/define-chaos-experiment-scope/',
                component: ComponentCreator('/de/docs/next/define-chaos-experiment-scope/', '259'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/define-scheduling-rules/',
                component: ComponentCreator('/de/docs/next/define-scheduling-rules/', '833'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/define-workflow-scheduling-rules/',
                component: ComponentCreator('/de/docs/next/define-workflow-scheduling-rules/', 'c37'),
                exact: true
              },
              {
                path: '/de/docs/next/developer-guide-overview/',
                component: ComponentCreator('/de/docs/next/developer-guide-overview/', 'db8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/expose-dashboard-with-ingress/',
                component: ComponentCreator('/de/docs/next/expose-dashboard-with-ingress/', '156'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/extend-chaos-daemon-interface/',
                component: ComponentCreator('/de/docs/next/extend-chaos-daemon-interface/', '24b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/extend-chaosd/',
                component: ComponentCreator('/de/docs/next/extend-chaosd/', '7df'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/faqs/',
                component: ComponentCreator('/de/docs/next/faqs/', 'e9f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/gcp-authentication/',
                component: ComponentCreator('/de/docs/next/gcp-authentication/', 'e4e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/glossary/',
                component: ComponentCreator('/de/docs/next/glossary/', '91b'),
                exact: true
              },
              {
                path: '/de/docs/next/go-client/',
                component: ComponentCreator('/de/docs/next/go-client/', '0c3'),
                exact: true
              },
              {
                path: '/de/docs/next/inspect-chaos-experiments/',
                component: ComponentCreator('/de/docs/next/inspect-chaos-experiments/', '6a8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/integrate-chaos-mesh-into-github-actions/',
                component: ComponentCreator('/de/docs/next/integrate-chaos-mesh-into-github-actions/', '1dc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/java-client/',
                component: ComponentCreator('/de/docs/next/java-client/', '3fd'),
                exact: true
              },
              {
                path: '/de/docs/next/manage-user-permissions/',
                component: ComponentCreator('/de/docs/next/manage-user-permissions/', '2fd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/multi-data-center-scenario/',
                component: ComponentCreator('/de/docs/next/multi-data-center-scenario/', 'bab'),
                exact: true
              },
              {
                path: '/de/docs/next/offline-installation/',
                component: ComponentCreator('/de/docs/next/offline-installation/', '6d8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/persistence-dashboard/',
                component: ComponentCreator('/de/docs/next/persistence-dashboard/', '077'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/production-installation-using-helm/',
                component: ComponentCreator('/de/docs/next/production-installation-using-helm/', '138'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/python-client/',
                component: ComponentCreator('/de/docs/next/python-client/', '930'),
                exact: true
              },
              {
                path: '/de/docs/next/quick-start/',
                component: ComponentCreator('/de/docs/next/quick-start/', '6cb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/release-0.0.8/',
                component: ComponentCreator('/de/docs/next/release-0.0.8/', 'bd3'),
                exact: true
              },
              {
                path: '/de/docs/next/release-0.0.9/',
                component: ComponentCreator('/de/docs/next/release-0.0.9/', 'eb4'),
                exact: true
              },
              {
                path: '/de/docs/next/release-1.0.0/',
                component: ComponentCreator('/de/docs/next/release-1.0.0/', 'dc9'),
                exact: true
              },
              {
                path: '/de/docs/next/release-2.0.0/',
                component: ComponentCreator('/de/docs/next/release-2.0.0/', 'aea'),
                exact: true
              },
              {
                path: '/de/docs/next/release-2.5-tracking/',
                component: ComponentCreator('/de/docs/next/release-2.5-tracking/', '966'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/release-cycle/',
                component: ComponentCreator('/de/docs/next/release-cycle/', 'eee'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/remote-cluster-management/',
                component: ComponentCreator('/de/docs/next/remote-cluster-management/', 'e21'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/run-a-chaos-experiment/',
                component: ComponentCreator('/de/docs/next/run-a-chaos-experiment/', '8f4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/run-serial-or-parallel-experiments/',
                component: ComponentCreator('/de/docs/next/run-serial-or-parallel-experiments/', '5aa'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/rust-client/',
                component: ComponentCreator('/de/docs/next/rust-client/', '44c'),
                exact: true
              },
              {
                path: '/de/docs/next/send-http-request-on-workflow/',
                component: ComponentCreator('/de/docs/next/send-http-request-on-workflow/', 'fcd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-aws-chaos/',
                component: ComponentCreator('/de/docs/next/simulate-aws-chaos/', 'c76'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-azure-chaos/',
                component: ComponentCreator('/de/docs/next/simulate-azure-chaos/', '227'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-block-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/next/simulate-block-chaos-on-kubernetes/', 'e87'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-disk-pressure-in-physical-nodes/',
                component: ComponentCreator('/de/docs/next/simulate-disk-pressure-in-physical-nodes/', 'fbb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-dns-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/next/simulate-dns-chaos-on-kubernetes/', 'eaf'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-file-chaos-in-physical-nodes/',
                component: ComponentCreator('/de/docs/next/simulate-file-chaos-in-physical-nodes/', 'b39'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-gcp-chaos/',
                component: ComponentCreator('/de/docs/next/simulate-gcp-chaos/', '45a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-heavy-stress-in-physical-nodes/',
                component: ComponentCreator('/de/docs/next/simulate-heavy-stress-in-physical-nodes/', 'e52'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-heavy-stress-on-kubernetes/',
                component: ComponentCreator('/de/docs/next/simulate-heavy-stress-on-kubernetes/', '1c2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-host-console-in-physical-nodes/',
                component: ComponentCreator('/de/docs/next/simulate-host-console-in-physical-nodes/', 'd24'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-http-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/next/simulate-http-chaos-on-kubernetes/', 'cdc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-io-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/next/simulate-io-chaos-on-kubernetes/', 'b6b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-jvm-application-chaos-in-physical-nodes/',
                component: ComponentCreator('/de/docs/next/simulate-jvm-application-chaos-in-physical-nodes/', 'e70'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-jvm-application-chaos/',
                component: ComponentCreator('/de/docs/next/simulate-jvm-application-chaos/', '270'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-kernel-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/next/simulate-kernel-chaos-on-kubernetes/', '8c8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-network-chaos-in-physical-nodes/',
                component: ComponentCreator('/de/docs/next/simulate-network-chaos-in-physical-nodes/', 'fc5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-network-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/next/simulate-network-chaos-on-kubernetes/', 'ed6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-physical-machine-chaos/',
                component: ComponentCreator('/de/docs/next/simulate-physical-machine-chaos/', 'a86'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-pod-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/next/simulate-pod-chaos-on-kubernetes/', '8a7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-process-chaos-in-physical-nodes/',
                component: ComponentCreator('/de/docs/next/simulate-process-chaos-in-physical-nodes/', '123'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-redis-chaos-on-physical-nodes/',
                component: ComponentCreator('/de/docs/next/simulate-redis-chaos-on-physical-nodes/', '060'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-time-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/next/simulate-time-chaos-on-kubernetes/', '815'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/simulate-time-chaos-on-physical-nodes/',
                component: ComponentCreator('/de/docs/next/simulate-time-chaos-on-physical-nodes/', '039'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/status-check-in-workflow/',
                component: ComponentCreator('/de/docs/next/status-check-in-workflow/', '796'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/troubleshooting-guide/',
                component: ComponentCreator('/de/docs/next/troubleshooting-guide/', 'f77'),
                exact: true
              },
              {
                path: '/de/docs/next/uninstallation/',
                component: ComponentCreator('/de/docs/next/uninstallation/', '3a4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/upgrade-from-2.1-to-2.2/',
                component: ComponentCreator('/de/docs/next/upgrade-from-2.1-to-2.2/', 'c36'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/upgrade-to-2.0/',
                component: ComponentCreator('/de/docs/next/upgrade-to-2.0/', '9bb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/next/use-argo-to-orchestrate-chaos-experiments/',
                component: ComponentCreator('/de/docs/next/use-argo-to-orchestrate-chaos-experiments/', 'b69'),
                exact: true
              },
              {
                path: '/de/docs/next/use-grafana-data-source/',
                component: ComponentCreator('/de/docs/next/use-grafana-data-source/', '959'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      },
      {
        path: '/de/docs/',
        component: ComponentCreator('/de/docs/', 'd7b'),
        routes: [
          {
            path: '/de/docs/',
            component: ComponentCreator('/de/docs/', 'c13'),
            routes: [
              {
                path: '/de/docs/',
                component: ComponentCreator('/de/docs/', 'fea'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/add-new-chaos-experiment-type/',
                component: ComponentCreator('/de/docs/add-new-chaos-experiment-type/', '2fc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/basic-features/',
                component: ComponentCreator('/de/docs/basic-features/', 'c9b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/chaos-engineering-principles/',
                component: ComponentCreator('/de/docs/chaos-engineering-principles/', '4df'),
                exact: true
              },
              {
                path: '/de/docs/chaosctl-tool/',
                component: ComponentCreator('/de/docs/chaosctl-tool/', 'b93'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/chaosd-overview/',
                component: ComponentCreator('/de/docs/chaosd-overview/', '0e1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/chaosd-search-recover/',
                component: ComponentCreator('/de/docs/chaosd-search-recover/', '582'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/check-workflow-status/',
                component: ComponentCreator('/de/docs/check-workflow-status/', '222'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/clean-up-chaos-experiments/',
                component: ComponentCreator('/de/docs/clean-up-chaos-experiments/', '5d7'),
                exact: true
              },
              {
                path: '/de/docs/configure-development-environment/',
                component: ComponentCreator('/de/docs/configure-development-environment/', 'c1e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/configure-enabled-namespace/',
                component: ComponentCreator('/de/docs/configure-enabled-namespace/', '280'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/create-chaos-mesh-workflow/',
                component: ComponentCreator('/de/docs/create-chaos-mesh-workflow/', 'bea'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/define-chaos-experiment-scope/',
                component: ComponentCreator('/de/docs/define-chaos-experiment-scope/', '6a4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/define-scheduling-rules/',
                component: ComponentCreator('/de/docs/define-scheduling-rules/', 'bea'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/define-workflow-scheduling-rules/',
                component: ComponentCreator('/de/docs/define-workflow-scheduling-rules/', 'b09'),
                exact: true
              },
              {
                path: '/de/docs/developer-guide-overview/',
                component: ComponentCreator('/de/docs/developer-guide-overview/', '338'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/expose-dashboard-with-ingress/',
                component: ComponentCreator('/de/docs/expose-dashboard-with-ingress/', 'd74'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/extend-chaos-daemon-interface/',
                component: ComponentCreator('/de/docs/extend-chaos-daemon-interface/', 'b93'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/extend-chaosd/',
                component: ComponentCreator('/de/docs/extend-chaosd/', '1c7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/faqs/',
                component: ComponentCreator('/de/docs/faqs/', '573'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/gcp-authentication/',
                component: ComponentCreator('/de/docs/gcp-authentication/', '6d3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/glossary/',
                component: ComponentCreator('/de/docs/glossary/', 'e9d'),
                exact: true
              },
              {
                path: '/de/docs/go-client/',
                component: ComponentCreator('/de/docs/go-client/', '28f'),
                exact: true
              },
              {
                path: '/de/docs/inspect-chaos-experiments/',
                component: ComponentCreator('/de/docs/inspect-chaos-experiments/', 'cdb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/integrate-chaos-mesh-into-github-actions/',
                component: ComponentCreator('/de/docs/integrate-chaos-mesh-into-github-actions/', '420'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/java-client/',
                component: ComponentCreator('/de/docs/java-client/', '852'),
                exact: true
              },
              {
                path: '/de/docs/manage-user-permissions/',
                component: ComponentCreator('/de/docs/manage-user-permissions/', '641'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/multi-data-center-scenario/',
                component: ComponentCreator('/de/docs/multi-data-center-scenario/', 'c6f'),
                exact: true
              },
              {
                path: '/de/docs/offline-installation/',
                component: ComponentCreator('/de/docs/offline-installation/', 'a9f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/persistence-dashboard/',
                component: ComponentCreator('/de/docs/persistence-dashboard/', 'c01'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/production-installation-using-helm/',
                component: ComponentCreator('/de/docs/production-installation-using-helm/', '63b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/python-client/',
                component: ComponentCreator('/de/docs/python-client/', '925'),
                exact: true
              },
              {
                path: '/de/docs/quick-start/',
                component: ComponentCreator('/de/docs/quick-start/', 'd1e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/release-0.0.8/',
                component: ComponentCreator('/de/docs/release-0.0.8/', '1ef'),
                exact: true
              },
              {
                path: '/de/docs/release-0.0.9/',
                component: ComponentCreator('/de/docs/release-0.0.9/', '7b9'),
                exact: true
              },
              {
                path: '/de/docs/release-1.0.0/',
                component: ComponentCreator('/de/docs/release-1.0.0/', '4f7'),
                exact: true
              },
              {
                path: '/de/docs/release-2.0.0/',
                component: ComponentCreator('/de/docs/release-2.0.0/', '28d'),
                exact: true
              },
              {
                path: '/de/docs/release-2.5-tracking/',
                component: ComponentCreator('/de/docs/release-2.5-tracking/', 'f40'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/release-cycle/',
                component: ComponentCreator('/de/docs/release-cycle/', '1c2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/remote-cluster-management/',
                component: ComponentCreator('/de/docs/remote-cluster-management/', 'af8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/run-a-chaos-experiment/',
                component: ComponentCreator('/de/docs/run-a-chaos-experiment/', '1f7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/run-serial-or-parallel-experiments/',
                component: ComponentCreator('/de/docs/run-serial-or-parallel-experiments/', '207'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/rust-client/',
                component: ComponentCreator('/de/docs/rust-client/', 'b9a'),
                exact: true
              },
              {
                path: '/de/docs/send-http-request-on-workflow/',
                component: ComponentCreator('/de/docs/send-http-request-on-workflow/', '416'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-aws-chaos/',
                component: ComponentCreator('/de/docs/simulate-aws-chaos/', '005'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-azure-chaos/',
                component: ComponentCreator('/de/docs/simulate-azure-chaos/', 'f05'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-block-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/simulate-block-chaos-on-kubernetes/', 'a24'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-disk-pressure-in-physical-nodes/',
                component: ComponentCreator('/de/docs/simulate-disk-pressure-in-physical-nodes/', 'bb5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-dns-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/simulate-dns-chaos-on-kubernetes/', 'd90'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-file-chaos-in-physical-nodes/',
                component: ComponentCreator('/de/docs/simulate-file-chaos-in-physical-nodes/', '152'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-gcp-chaos/',
                component: ComponentCreator('/de/docs/simulate-gcp-chaos/', '6ec'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-heavy-stress-in-physical-nodes/',
                component: ComponentCreator('/de/docs/simulate-heavy-stress-in-physical-nodes/', 'b59'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-heavy-stress-on-kubernetes/',
                component: ComponentCreator('/de/docs/simulate-heavy-stress-on-kubernetes/', 'ac3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-host-console-in-physical-nodes/',
                component: ComponentCreator('/de/docs/simulate-host-console-in-physical-nodes/', '03c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-http-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/simulate-http-chaos-on-kubernetes/', '609'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-io-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/simulate-io-chaos-on-kubernetes/', '192'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-jvm-application-chaos-in-physical-nodes/',
                component: ComponentCreator('/de/docs/simulate-jvm-application-chaos-in-physical-nodes/', 'a7a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-jvm-application-chaos/',
                component: ComponentCreator('/de/docs/simulate-jvm-application-chaos/', 'f80'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-kernel-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/simulate-kernel-chaos-on-kubernetes/', 'c76'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-network-chaos-in-physical-nodes/',
                component: ComponentCreator('/de/docs/simulate-network-chaos-in-physical-nodes/', '600'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-network-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/simulate-network-chaos-on-kubernetes/', '4df'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-physical-machine-chaos/',
                component: ComponentCreator('/de/docs/simulate-physical-machine-chaos/', '78b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-pod-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/simulate-pod-chaos-on-kubernetes/', 'd41'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-process-chaos-in-physical-nodes/',
                component: ComponentCreator('/de/docs/simulate-process-chaos-in-physical-nodes/', '7ac'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-redis-chaos-on-physical-nodes/',
                component: ComponentCreator('/de/docs/simulate-redis-chaos-on-physical-nodes/', '2a3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-time-chaos-on-kubernetes/',
                component: ComponentCreator('/de/docs/simulate-time-chaos-on-kubernetes/', 'a31'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/simulate-time-chaos-on-physical-nodes/',
                component: ComponentCreator('/de/docs/simulate-time-chaos-on-physical-nodes/', 'e0d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/status-check-in-workflow/',
                component: ComponentCreator('/de/docs/status-check-in-workflow/', '3d7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/troubleshooting-guide/',
                component: ComponentCreator('/de/docs/troubleshooting-guide/', 'fc3'),
                exact: true
              },
              {
                path: '/de/docs/uninstallation/',
                component: ComponentCreator('/de/docs/uninstallation/', '515'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/upgrade-from-2.1-to-2.2/',
                component: ComponentCreator('/de/docs/upgrade-from-2.1-to-2.2/', 'cc7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/upgrade-to-2.0/',
                component: ComponentCreator('/de/docs/upgrade-to-2.0/', '88f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/de/docs/use-argo-to-orchestrate-chaos-experiments/',
                component: ComponentCreator('/de/docs/use-argo-to-orchestrate-chaos-experiments/', '7c6'),
                exact: true
              },
              {
                path: '/de/docs/use-grafana-data-source/',
                component: ComponentCreator('/de/docs/use-grafana-data-source/', '973'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/de/',
    component: ComponentCreator('/de/', '4d1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
