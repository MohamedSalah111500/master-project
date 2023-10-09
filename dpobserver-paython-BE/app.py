
from flask import Flask, request, jsonify
import json

#from clusters import clustring_result as cls
from models import predict
# clustring implementation


app = Flask(__name__)


@app.route("/")
def index():
    with open("data/right-data/scene (3).json", "r") as json_file:
        prediction = predict(json_file)
        print(prediction)
        return json.dumps({'result': str(prediction)})

@app.route('/model', methods=['POST'])
def update_record():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        jsonRes = request.json
        dataList = jsonRes['data']
        app.logger.debug('Headers: %s', dataList)
        print(type(dataList))
        result =  predict(dataList) 
        print(type(result))

        return json.dumps(str(result))
    else:
        return 'Content-Type not supported!'


if __name__ == "__main__":
    app.run(debug=True)
