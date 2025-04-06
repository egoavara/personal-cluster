# %%

import boto3
import json

# boto3 resource를 통해 RGW endpoint와 자격증명을 설정합니다.
s3 = boto3.client(
    "s3",
    endpoint_url="http://127.0.0.1:49333/",
    aws_access_key_id="...",
    aws_secret_access_key="...",
)

# 대상 버킷과 객체 이름 설정
bucket_name = "default"  # 예: "default"
object_key = "Fallowfields.png"  # 변경할 파일명

bucket_policy = {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AddPerm",
            "Effect": "Allow",
            "Principal": "*",
            "Action": ["s3:GetObject"],
            "Resource": ["arn:aws:s3:::{0}/*".format(bucket_name)],
        }
    ],
}

bucket_policy = json.dumps(bucket_policy)

# 결과 출력 (성공시 HTTP 응답 코드 200 등 반환)
print(s3.put_bucket_policy(Bucket=bucket_name, Policy=bucket_policy))
