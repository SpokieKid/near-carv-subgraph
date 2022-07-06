import { near, log, json, JSONValueKind } from "@graphprotocol/graph-ts"
import { UserNftStat } from "../generated/schema"

export function handleReceipt(receipt: near.ReceiptWithOutcome): void {
  const actions = receipt.receipt.actions;
  for (let i = 0; i < actions.length; i++) {
    handleAction(actions[i], receipt.receipt, receipt.block.header, receipt.outcome);
  }
}

function handleAction(
  action: near.ActionValue,
  receipt: near.ActionReceipt,
  blockHeader: near.BlockHeader,
  outcome: near.ExecutionOutcome
): void {
  if (action.kind != near.ActionKind.FUNCTION_CALL) {
    log.info("Early return: {}", ["Not a function call"])
    return;
  }
  const functionCall = action.toFunctionCall();

  if (functionCall.methodName == "nft_transfer") {
    let user = UserNftStat.load(receipt.signerId);
    if (user == null) {
      user = new UserNftStat(receipt.signerId);
      user.nftsIn = receipt.receiverId;
      user.save()
    }

    // Test ends here


    // Test if implementation-two's model will work on this contract

    if (outcome.logs[0]!=null) {

      let parsed = json.fromString(outcome.logs[0]);
      if (parsed.kind == JSONValueKind.OBJECT) {

        let entry = parsed.toObject();

        // EVENT_JSON

        let eventJSON = entry.entries[0].value.toObject()

        for(let i = 0; i < eventJSON.entries.length; i++) {
          let key = eventJSON.entries[i].key.toString();
          switch (true) {
            case key == "event":
              user.userAddress = eventJSON.entries[i].value.toString();
              break;
          }
        }

        // DATA

        // let data = entry.entries[0].value.toObject()
        // for (let i = 0; i < data.entries.length; i++) {
        //   let key = data.entries[i].key.toString();
        //   switch (true) {
        //     case key == "owner_id":
        //       user.ftsTransfered = data.entries[i].value.toString();
        //       break
        //     // case key == "token_ids":
        //     //   user.nftsIn = data.entries[i].value.toString();
        //     //   break
        //   }
        // }
        user.save()

  } else {
    log.info("Event and Data Not processed - FunctionCall is: {}", [functionCall.methodName]);
  }
  }
  }
}