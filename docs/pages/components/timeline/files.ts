const files = [
  {
    name: 'timeline.less',
    import: true,
    content: `.custom-timeline {
  margin-left: 20px;

  .rs-timeline-item-custom-dot {
    .rs-icon {
      position: absolute;
      background: #fff;
      top: 0;
      left: -2px;
      border: 2px solid #ddd;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      font-size: 18px;
      color: #999;
      margin-left: -13px;
      justify-content: center;
      padding: 8px;
    }
  }

  .rs-timeline-item-content {
    margin-left: 24px;
  }
}

.rs-timeline-item-content p {
  margin: 0;
}
`
  }
];

export default files;
