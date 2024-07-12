import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { clsx } from 'clsx'

import Card from './Card'

function Feature({ imgUrl, title, description, className, imageWidth }) {
  const isKubernetes = imgUrl === 'img/logos/kubernetes.svg'

  return (
    <Card className={className}>
      <div
        className={clsx(
          'tw-relative tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-h-full',
          isKubernetes && 'lg:tw-items-start'
        )}
      >
        {!isKubernetes ? (
          <div className="tw-flex-1 max-lg:tw-mb-6 tw-text-center">
            <img className="scroll-to-display tw-w-[60%]" style={{ width: imageWidth }} src={useBaseUrl(imgUrl)} />
          </div>
        ) : (
          <img
            className="scroll-to-display lg:tw-absolute lg:tw-right-6 lg:-tw-bottom-12 max-lg:tw-w-[40%] lg:tw-h-48 max-lg:tw-mb-6"
            src={useBaseUrl(imgUrl)}
          />
        )}
        <div className="tw-flex-1">
          <div>
            <h3>{title}</h3>
            <div>{description}</div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default function Features() {
  return (
    <>
      <Feature
        imgUrl="img/features/Int1.svg"
        title={<Translate id="">Decision intelligence</Translate>}
        description={
          <>
            <p>
              <Translate
                id=""
                values={{
                  minikube: (
                    <Link className="tw-underline dark:tw-no-underline" to="https://minikube.sigs.k8s.io/">
                      minikube
                    </Link>
                  ),
                  kind: (
                    {/* <Link className="tw-underline dark:tw-no-underline" to="https://kind.sigs.k8s.io/">
                      kind
                    </Link> */}
                  ),
                }}
              >
                {/* {
                  'No special dependencies, Chaos Mesh can be easily deployed on Kubernetes clusters directly, including {minikube} and {kind}.'
                } */}
              </Translate>
            </p>
            <ul>
              <li>
                <Translate id="home.easytouse.2">
                  Ability to perform chaos experiments in production environments without modifying the deployment logic
                  of applications.
                </Translate>
              </li>
              <li>
                <Translate id="home.easytouse.3">
                  Quickly create chaos experiments through the dashboard, allowing users to observe the experiment's
                  state in real time and quickly roll back any injected failures.
                </Translate>
              </li>
            </ul>
          </>
        }
        className="lg:tw-col-span-4"
      />
       <Feature
        imgUrl="img/features/Int1.svg"
        title={<Translate id="">Decision intelligence</Translate>}
        description={
          <>
            <p>
              <Translate
                id=""
                values={{
                  minikube: (
                    <Link className="tw-underline dark:tw-no-underline" to="https://minikube.sigs.k8s.io/">
                      minikube
                    </Link>
                  ),
                  kind: (
                    {/* <Link className="tw-underline dark:tw-no-underline" to="https://kind.sigs.k8s.io/">
                      kind
                    </Link> */}
                  ),
                }}
              >
                {/* {
                  'No special dependencies, Chaos Mesh can be easily deployed on Kubernetes clusters directly, including {minikube} and {kind}.'
                } */}
              </Translate>
            </p>
            <ul>
              <li>
                <Translate id="home.easytouse.2">
                  Ability to perform chaos experiments in production environments without modifying the deployment logic
                  of applications.
                </Translate>
              </li>
              <li>
                <Translate id="home.easytouse.3">
                  Quickly create chaos experiments through the dashboard, allowing users to observe the experiment's
                  state in real time and quickly roll back any injected failures.
                </Translate>
              </li>
            </ul>
          </>
        }
        className="lg:tw-col-span-4"
      />
       <Feature
        imgUrl="img/features/Int1.svg"
        title={<Translate id="">Decision intelligence</Translate>}
        description={
          <>
            <p>
              <Translate
                id=""
                values={{
                  minikube: (
                    <Link className="tw-underline dark:tw-no-underline" to="https://minikube.sigs.k8s.io/">
                      minikube
                    </Link>
                  ),
                  kind: (
                    {/* <Link className="tw-underline dark:tw-no-underline" to="https://kind.sigs.k8s.io/">
                      kind
                    </Link> */}
                  ),
                }}
              >
                {/* {
                  'No special dependencies, Chaos Mesh can be easily deployed on Kubernetes clusters directly, including {minikube} and {kind}.'
                } */}
              </Translate>
            </p>
            <ul>
              <li>
                <Translate id="home.easytouse.2">
                  Ability to perform chaos experiments in production environments without modifying the deployment logic
                  of applications.
                </Translate>
              </li>
              <li>
                <Translate id="home.easytouse.3">
                  Quickly create chaos experiments through the dashboard, allowing users to observe the experiment's
                  state in real time and quickly roll back any injected failures.
                </Translate>
              </li>
            </ul>
          </>
        }
        className="lg:tw-col-span-4"
      />
       <Feature
        imgUrl="img/features/Int1.svg"
        title={<Translate id="">Decision intelligence</Translate>}
        description={
          <>
            <p>
              <Translate
                id=""
                values={{
                  minikube: (
                    <Link className="tw-underline dark:tw-no-underline" to="https://minikube.sigs.k8s.io/">
                      minikube
                    </Link>
                  ),
                  kind: (
                    {/* <Link className="tw-underline dark:tw-no-underline" to="https://kind.sigs.k8s.io/">
                      kind
                    </Link> */}
                  ),
                }}
              >
                {/* {
                  'No special dependencies, Chaos Mesh can be easily deployed on Kubernetes clusters directly, including {minikube} and {kind}.'
                } */}
              </Translate>
            </p>
            <ul>
              <li>
                <Translate id="home.easytouse.2">
                  Ability to perform chaos experiments in production environments without modifying the deployment logic
                  of applications.
                </Translate>
              </li>
              <li>
                <Translate id="home.easytouse.3">
                  Quickly create chaos experiments through the dashboard, allowing users to observe the experiment's
                  state in real time and quickly roll back any injected failures.
                </Translate>
              </li>
            </ul>
          </>
        }
        className="lg:tw-col-span-4"
      />
    </>
  )
}
