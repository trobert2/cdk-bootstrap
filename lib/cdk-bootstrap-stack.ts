import * as cdk from '@aws-cdk/core'

import { BasicVpc, BasicVpcProps } from './constructs/vpc/vpc'

export interface JsonProps {
  cidr: string // '10.0.0.0/16'
}

export class CdkBootstrapStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    console.log(`${process.env.STAGE}-mainVpcCidr`)

    const jsonProps: JsonProps = this.node.tryGetContext(`${process.env.STAGE}-mainVpcCidr`)

    console.log(jsonProps)

    // The code that defines your stack goes here
    const mainVpcProps: BasicVpcProps = {
      cidr: jsonProps.cidr
    }
    new BasicVpc(this, 'MainVpc', mainVpcProps)
  }
}
