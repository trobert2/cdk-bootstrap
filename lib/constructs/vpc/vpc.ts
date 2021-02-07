import * as ec2 from '@aws-cdk/aws-ec2'
import * as cdk from '@aws-cdk/core'

export interface BasicVpcProps {
  cidr: string // '10.0.0.0/16'
}

export class BasicVpc extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: BasicVpcProps) {
    super(scope, id)
    new ec2.Vpc(this, id, {
      cidr: props.cidr
    })
  }
}
