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
        imgUrl="img/features/graph2.png"
        title={<Translate id="">Predictive Analytics</Translate>}
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
                Climate risk forecasting
                </Translate>
              </li>
              <li>
                <Translate id="home.easytouse.3">
                Supplier risk forecasting
                </Translate>
              </li>
              <li>
                <Translate id="home.easytouse.3">
                Internal carbon pricing
                </Translate>
              </li>
              <li>
                <Translate id="home.easytouse.3">
                Carbon emission forecasting

                </Translate>
              </li>
              <li>
                <Translate id="home.easytouse.3">
                ESG score prediction
                </Translate>
              </li>
            </ul>
          </>
        }
        className="lg:tw-col-span-3"
      />
       <Feature
        imgUrl="img/features/Int1.svg"
        title={<Translate id="">Decision Intelligence</Translate>}
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
                Targets Identification
                </Translate>
              </li>
              <li>
                <Translate id="home.easytouse.3">
                Decarbonization Roadmaps
                </Translate>
              </li>
              <li>
                <Translate id="home.easytouse.3">
                Transition Planning
                </Translate>
              </li>
            </ul>
          </>
        }
        className="lg:tw-col-span-3"
      />
       <Feature
        imgUrl="img/features/graph.png"
        title={<Translate id="">Market Segmentation
</Translate>}
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
                Employee engagement and retention
                </Translate>
              </li>
              <li>
                <Translate id="home.easytouse.3">
                Industry benchmarking
                </Translate>
              </li>
              <li>
                <Translate id="home.easytouse.3">
                Materiality assessments
                </Translate>
              </li>
            </ul>
          </>
        }
        className="lg:tw-col-span-3"
      />
       <Feature
        imgUrl="img/features/flexible-scope.svg"
        title={<Translate id="">Recommendation systems</Translate>}
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
                Adaptation/ Mitigation strategies
                </Translate>
              </li>
              <li>
                <Translate id="home.easytouse.3">
                Sustainable procurement
                </Translate>
              </li>
            </ul>
          </>
        }
        className="lg:tw-col-span-3"
      />
    </>
  )
}
