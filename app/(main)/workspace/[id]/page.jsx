import ChatView from "../../../../custom/ChatView";
import CodeView from "../../../../custom/CodeView";

function Workspace() {
  return (
    <div className="p-3 pr-5 mt-3">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <ChatView />
        <div className="col-span-3">
          <CodeView />
        </div>
      </div>
    </div>
  );
}

export default Workspace;
